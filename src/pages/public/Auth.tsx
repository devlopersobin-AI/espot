import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building,
  Calendar,
  CheckCircle2,
  FileText,
  Lock,
  Mail,
  MapPin,
  Phone,
  Upload,
  User,
} from "lucide-react";
import { getDashboardPathForRole } from "../../auth/permissions";
import { sanitizeInput, isValidEmail } from "../../lib/utils";

type Role =
  | "Member"
  | "Partner"
  | "Franchisee"
  | "Entrepreneur"
  | "Leader"
  | "Scholar"
  | "Jobseeker"
  | "Trainer"
  | "Trainee"
  | "Admin";
type SignupRole = Exclude<Role, "Admin">;

const LOGIN_ROLES: Role[] = [
  "Member",
  "Partner",
  "Franchisee",
  "Entrepreneur",
  "Leader",
  "Scholar",
  "Jobseeker",
  "Trainer",
  "Trainee",
  "Admin",
];
const SIGNUP_ROLES: SignupRole[] = [
  "Member",
  "Partner",
  "Franchisee",
  "Entrepreneur",
  "Leader",
  "Scholar",
  "Jobseeker",
  "Trainer",
  "Trainee",
];

const DUMMY_CREDENTIALS: Record<Role, { email: string; password: string }> = {
  Member: { email: "member@demo.com", password: "demo123" },
  Partner: { email: "partner@demo.com", password: "demo123" },
  Franchisee: { email: "franchisee@demo.com", password: "demo123" },
  Entrepreneur: { email: "entrepreneur@demo.com", password: "demo123" },
  Leader: { email: "leader@demo.com", password: "demo123" },
  Scholar: { email: "scholar@demo.com", password: "demo123" },
  Jobseeker: { email: "jobseeker@demo.com", password: "demo123" },
  Trainer: { email: "trainer@demo.com", password: "demo123" },
  Trainee: { email: "trainee@demo.com", password: "demo123" },
  Admin: { email: "admin@demo.com", password: "admin123" },
};

const ROLE_REQUIREMENTS: Record<
  SignupRole,
  { info: string[]; docs: string[] }
> = {
  Member: {
    info: [
      "Date of birth",
      "Current address",
      "Primary profession",
      "Emergency contact",
    ],
    docs: ["Government ID (required)", "Recent profile photo"],
  },
  Partner: {
    info: [
      "Business legal name",
      "Registration number",
      "Tax or VAT number",
      "Business contact person",
    ],
    docs: [
      "Business registration certificate",
      "Tax registration",
      "Authorized representative ID",
    ],
  },
  Franchisee: {
    info: [
      "Proposed city and territory",
      "Investment capacity",
      "Operational background",
      "Preferred launch timeline",
    ],
    docs: [
      "Business plan deck",
      "Proof of funds",
      "Identity and address proof",
    ],
  },
  Entrepreneur: {
    info: [
      "Startup name and sector",
      "Business stage",
      "Funding requirement",
      "Founder profile summary",
    ],
    docs: ["Pitch deck", "Company registration if available", "Founder ID"],
  },
  Leader: {
    info: [
      "Current designation",
      "Organization name",
      "Years of experience",
      "Professional profile link",
    ],
    docs: [
      "CV or profile resume",
      "Recommendation letter",
      "Identity document",
    ],
  },
  Scholar: {
    info: [
      "Institution and program",
      "Academic year",
      "Field of study",
      "Guardian or mentor contact",
    ],
    docs: ["Academic transcript", "Student ID", "Recommendation letter"],
  },
  Jobseeker: {
    info: [
      "Desired role",
      "Years of experience",
      "Preferred work location",
      "Key skills summary",
    ],
    docs: ["Updated CV", "Identity document"],
  },
  Trainer: {
    info: [
      "Training domain",
      "Years of delivery experience",
      "Session format (online or offline)",
      "Language preference",
    ],
    docs: ["Trainer CV", "Certificates and credentials", "Government ID"],
  },
  Trainee: {
    info: [
      "Preferred training program",
      "Current education or profession",
      "Learning goals",
      "Emergency contact",
    ],
    docs: ["Government ID (required)", "Recent profile photo"],
  },
};

type RoleFormField =
  | {
      kind: "input";
      label: string;
      type?: string;
      placeholder?: string;
      icon?: React.ReactNode;
      required?: boolean;
    }
  | {
      kind: "select";
      label: string;
      options: string[];
      required?: boolean;
    }
  | {
      kind: "upload";
      label: string;
      id: string;
      required?: boolean;
    };

const ROLE_STEP2_FIELDS: Record<SignupRole, RoleFormField[]> = {
  Partner: [
    {
      kind: "input",
      label: "Business legal name",
      placeholder: "Acme Partners Pvt. Ltd.",
      icon: <Building className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Business registration number",
      placeholder: "REG-2026-12345",
      icon: <FileText className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Tax or VAT number",
      placeholder: "VAT-009821",
      icon: <FileText className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Business website",
      type: "url",
      placeholder: "https://example.com",
      icon: <Briefcase className="h-5 w-5 text-gray-400" />,
    },
    {
      kind: "upload",
      label: "Upload business registration",
      id: "partner-reg",
      required: true,
    },
    {
      kind: "upload",
      label: "Upload tax certificate",
      id: "partner-tax",
      required: true,
    },
  ],
  Franchisee: [
    {
      kind: "input",
      label: "Proposed franchise city",
      placeholder: "Pokhara",
      icon: <MapPin className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Investment capacity (USD)",
      placeholder: "150000",
      icon: <FileText className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Commercial space size (sq ft)",
      placeholder: "1200",
      icon: <Building className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Expected launch month",
      type: "month",
      icon: <Calendar className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "upload",
      label: "Upload business plan",
      id: "franchise-plan",
      required: true,
    },
    {
      kind: "upload",
      label: "Upload proof of funds",
      id: "franchise-funds",
      required: true,
    },
  ],
  Entrepreneur: [
    {
      kind: "input",
      label: "Startup name",
      placeholder: "Nova Labs",
      icon: <Building className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Startup sector",
      placeholder: "FinTech",
      icon: <Briefcase className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "select",
      label: "Business stage",
      options: ["Idea", "MVP", "Revenue", "Growth"],
      required: true,
    },
    {
      kind: "input",
      label: "Funding requirement (USD)",
      placeholder: "250000",
      icon: <FileText className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "upload",
      label: "Upload pitch deck",
      id: "entrepreneur-deck",
      required: true,
    },
  ],
  Leader: [
    {
      kind: "input",
      label: "Current designation",
      placeholder: "Regional Director",
      icon: <Briefcase className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Organization",
      placeholder: "Global Impact Org",
      icon: <Building className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Years of experience",
      type: "number",
      placeholder: "12",
      icon: <FileText className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "LinkedIn profile",
      type: "url",
      placeholder: "https://linkedin.com/in/username",
      icon: <User className="h-5 w-5 text-gray-400" />,
    },
    { kind: "upload", label: "Upload CV", id: "leader-cv", required: true },
    {
      kind: "upload",
      label: "Upload recommendation letter",
      id: "leader-rec",
      required: true,
    },
  ],
  Scholar: [
    {
      kind: "input",
      label: "Institution",
      placeholder: "National College",
      icon: <Building className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Program or major",
      placeholder: "Computer Science",
      icon: <Briefcase className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Academic year",
      placeholder: "3rd Year",
      icon: <Calendar className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Guardian or mentor contact",
      placeholder: "+977 98XXXXXXXX",
      icon: <Phone className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "upload",
      label: "Upload transcript",
      id: "scholar-transcript",
      required: true,
    },
    {
      kind: "upload",
      label: "Upload student ID",
      id: "scholar-id",
      required: true,
    },
  ],
  Jobseeker: [
    {
      kind: "input",
      label: "Target role",
      placeholder: "Frontend Developer",
      icon: <Briefcase className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Experience in years",
      type: "number",
      placeholder: "3",
      icon: <FileText className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Preferred location",
      placeholder: "Kathmandu / Remote",
      icon: <MapPin className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Expected monthly salary",
      placeholder: "1200 USD",
      icon: <FileText className="h-5 w-5 text-gray-400" />,
    },
    { kind: "upload", label: "Upload CV", id: "jobseeker-cv", required: true },
  ],
  Trainer: [
    {
      kind: "input",
      label: "Training domain",
      placeholder: "Digital Marketing",
      icon: <Briefcase className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Years of training experience",
      type: "number",
      placeholder: "6",
      icon: <FileText className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "select",
      label: "Delivery mode",
      options: ["Online", "Offline", "Hybrid"],
      required: true,
    },
    {
      kind: "upload",
      label: "Upload trainer CV",
      id: "trainer-cv",
      required: true,
    },
    {
      kind: "upload",
      label: "Upload certificates",
      id: "trainer-cert",
      required: true,
    },
  ],
  Member: [
    {
      kind: "input",
      label: "Date of birth",
      type: "date",
      icon: <Calendar className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Current address",
      placeholder: "123 Main St, City, Country",
      icon: <MapPin className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Primary profession",
      placeholder: "Student / Engineer / Business Owner",
      icon: <Briefcase className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Emergency contact",
      placeholder: "+977 98XXXXXXXX",
      icon: <Phone className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "upload",
      label: "Upload government ID",
      id: "member-id",
      required: true,
    },
  ],
  Trainee: [
    {
      kind: "input",
      label: "Preferred training program",
      placeholder: "Agile Fundamentals",
      icon: <Briefcase className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Current education or profession",
      placeholder: "BBA Student / Marketing Assistant",
      icon: <Building className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Learning goals",
      placeholder: "Improve project management skills",
      icon: <FileText className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "input",
      label: "Emergency contact",
      placeholder: "+977 98XXXXXXXX",
      icon: <Phone className="h-5 w-5 text-gray-400" />,
      required: true,
    },
    {
      kind: "upload",
      label: "Upload government ID",
      id: "trainee-id",
      required: true,
    },
    {
      kind: "upload",
      label: "Upload recent profile photo",
      id: "trainee-photo",
      required: true,
    },
  ],
};

function normalizeRole(input: string | null): Role {
  const match = LOGIN_ROLES.find(
    (role) => role.toLowerCase() === (input || "").toLowerCase(),
  );
  return match || "Member";
}

export default function Auth() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const modeParam = searchParams.get("mode");
  const roleParam = searchParams.get("role");
  const packageParam = searchParams.get("package");
  const roleFromQuery = normalizeRole(roleParam);
  const signupRoleFromQuery: SignupRole =
    roleFromQuery === "Admin" ? "Member" : roleFromQuery;
  const signupFromQuery = modeParam === "signup";

  const [isLogin, setIsLogin] = useState(!signupFromQuery);
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<SignupRole>(signupRoleFromQuery);
  const [loginRole, setLoginRole] = useState<Role>(roleFromQuery);
  const [authError, setAuthError] = useState("");
  // Store selected package for use in the form or next step
  const [selectedPackage] = useState<string | null>(packageParam);

  useEffect(() => {
    setIsLogin(!signupFromQuery);
    setRole(signupRoleFromQuery);
    setLoginRole(roleFromQuery);
    setStep(1);
    setAuthError("");
  }, [signupFromQuery, roleFromQuery, signupRoleFromQuery]);

  const roleRequirements = useMemo(() => ROLE_REQUIREMENTS[role], [role]);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");

    if (!isLogin && step === 1) {
      setStep(2);
      return;
    }

    if (isLogin) {
      const formData = new FormData(e.currentTarget as HTMLFormElement);
      const email = sanitizeInput(
        String(formData.get("email") || ""),
      ).toLowerCase();
      const password = String(formData.get("password") || "");

      if (!isValidEmail(email)) {
        setAuthError("Please enter a valid email address.");
        return;
      }

      if (!password || password.length < 4) {
        setAuthError("Please enter your password.");
        return;
      }

      const expected = DUMMY_CREDENTIALS[loginRole];

      if (email === expected.email && password === expected.password) {
        localStorage.setItem("authRole", loginRole);
        navigate(getDashboardPathForRole(loginRole));
      } else {
        setAuthError("Invalid email or password. Please try again.");
      }
      return;
    }

    localStorage.setItem("authRole", role);
    if (role === "Trainee") {
      navigate("/trainee-course-register");
    } else {
      navigate(getDashboardPathForRole(role));
    }
  };

  const renderRoleSpecificFields = () => {
    const fields = ROLE_STEP2_FIELDS[role];

    return (
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {fields.map((field) => {
          if (field.kind === "upload") {
            return (
              <React.Fragment key={field.id}>
                <UploadField
                  label={field.label}
                  id={field.id}
                  required={field.required}
                />
              </React.Fragment>
            );
          }

          if (field.kind === "select") {
            return (
              <div key={field.label}>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  {field.label}
                </label>
                <select
                  className="block w-full px-3 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required={field.required}
                >
                  <option value="">Select {field.label.toLowerCase()}</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            );
          }

          return (
            <React.Fragment key={field.label}>
              <InputField
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                icon={field.icon}
                required={field.required}
              />
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-gray-100">
        <div className="flex items-center justify-between mb-5">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <Link
            to="/"
            className="font-bold text-lg sm:text-xl tracking-tight text-blue-700"
          >
            E-SPOT
          </Link>
        </div>

        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            {isLogin
              ? "Sign in to your account"
              : step === 1
                ? `Join as ${role}`
                : `${role} verification details`}
          </h2>
          {selectedPackage && !isLogin && (
            <div className="mt-2 text-base font-semibold text-blue-700">
              Selected Package:{" "}
              <span className="font-bold">{selectedPackage}</span>
            </div>
          )}
          <p className="mt-2 text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already registered? "}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setStep(1);
                setAuthError("");
              }}
              className="font-bold text-blue-600 hover:text-blue-500"
            >
              {isLogin ? "Create one now" : "Sign in instead"}
            </button>
          </p>
          {!isLogin && (
            <div className="mt-4 flex items-center justify-center space-x-2">
              <div
                className={`h-2 w-14 rounded-full ${step >= 1 ? "bg-blue-600" : "bg-gray-200"}`}
              ></div>
              <div
                className={`h-2 w-14 rounded-full ${step >= 2 ? "bg-blue-600" : "bg-gray-200"}`}
              ></div>
            </div>
          )}
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleAuth}>
          {isLogin || step === 1 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {!isLogin && (
                <div className="sm:col-span-2">
                  <InputField
                    label="Full name"
                    placeholder="John Doe"
                    icon={<User className="h-5 w-5 text-gray-400" />}
                    required
                  />
                </div>
              )}

              <div className="sm:col-span-2">
                <InputField
                  label="Email address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  icon={<Mail className="h-5 w-5 text-gray-400" />}
                  required
                />
              </div>

              {!isLogin && (
                <div className="sm:col-span-2">
                  <InputField
                    label="Mobile number"
                    type="tel"
                    placeholder="+977 98XXXXXXXX"
                    icon={<Phone className="h-5 w-5 text-gray-400" />}
                    required
                  />
                </div>
              )}

              <div className={isLogin ? "sm:col-span-2" : ""}>
                <InputField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  icon={<Lock className="h-5 w-5 text-gray-400" />}
                  required
                />
              </div>

              {isLogin && (
                <div className="sm:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Demo login role
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      value={loginRole}
                      onChange={(e) => {
                        setLoginRole(e.target.value as Role);
                        setAuthError("");
                      }}
                      className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      {LOGIN_ROLES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    Demo credentials: {DUMMY_CREDENTIALS[loginRole].email} /{" "}
                    {DUMMY_CREDENTIALS[loginRole].password}
                  </p>
                </div>
              )}

              {!isLogin && (
                <div>
                  <InputField
                    label="Confirm password"
                    type="password"
                    placeholder="••••••••"
                    icon={<Lock className="h-5 w-5 text-gray-400" />}
                    required
                  />
                </div>
              )}

              {!isLogin && (
                <div className="sm:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    I want to join as
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value as SignupRole)}
                      className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      {SIGNUP_ROLES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700 mb-2">
                  Required information for {role}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1.5">
                      Information
                    </p>
                    <ul className="space-y-1.5">
                      {roleRequirements.info.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-slate-700 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1.5">
                      Documents
                    </p>
                    <ul className="space-y-1.5">
                      {roleRequirements.docs.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-slate-700 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {renderRoleSpecificFields()}
            </div>
          )}

          {isLogin && (
            <>
              {authError && (
                <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  {authError}
                </div>
              )}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  className="text-sm font-bold text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </button>
              </div>
            </>
          )}

          <div className="flex gap-3">
            {!isLogin && step === 2 && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 flex justify-center py-3 px-4 border border-gray-300 text-sm font-bold rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <ArrowLeft className="mr-2 h-5 w-5" /> Previous
              </button>
            )}
            <button
              type="submit"
              className={`${!isLogin && step === 2 ? "flex-1" : "w-full"} group relative flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg shadow-blue-600/20`}
            >
              {isLogin
                ? "Sign In"
                : step === 1
                  ? "Continue"
                  : "Complete Registration"}
              {(isLogin || step === 1) && (
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  icon,
  required,
}: {
  label: string;
  name?: string;
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        {icon ? (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        ) : null}
        <input
          name={name}
          type={type}
          required={required}
          className={`appearance-none block w-full ${icon ? "pl-10" : "pl-3"} pr-3 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

function UploadField({
  label,
  id,
  required,
}: {
  label: string;
  id: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-1">
        {label}
      </label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-blue-500 transition-colors cursor-pointer bg-gray-50">
        <div className="space-y-1 text-center">
          <Upload className="mx-auto h-10 w-10 text-gray-400" />
          <div className="flex text-sm text-gray-600 justify-center">
            <label
              htmlFor={id}
              className="relative cursor-pointer bg-transparent rounded-md font-bold text-blue-600 hover:text-blue-500"
            >
              <span>Upload file</span>
              <input
                id={id}
                name={id}
                type="file"
                className="sr-only"
                required={required}
              />
            </label>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
        </div>
      </div>
    </div>
  );
}
