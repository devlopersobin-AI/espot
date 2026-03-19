import React, { useMemo, useState } from "react";
import Hero from "../../components/Hero";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import DynamicForm, {
  type DynamicFormField,
} from "../../components/forms/DynamicForm";

export default function Contact() {
  const [formValues, setFormValues] = useState<
    Record<string, string | boolean>
  >({
    name: "",
    phone: "",
    email: "",
    company: "",
    jobTitle: "",
    website: "",
    industry: "",
    contactMethod: "",
    subject: "",
    message: "",
    terms: false,
  });

  const fields = useMemo<DynamicFormField[]>(
    () => [
      {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "Your name",
        required: true,
      },
      {
        name: "phone",
        label: "Phone",
        type: "tel",
        placeholder: "+977-XXXXXXXXXX",
        required: true,
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "your@email.com",
        required: true,
      },
      {
        name: "company",
        label: "Company Name",
        type: "text",
        placeholder: "Your company (optional)",
      },
      {
        name: "jobTitle",
        label: "Job Title",
        type: "text",
        placeholder: "Your position",
        required: true,
      },
      {
        name: "website",
        label: "Website",
        type: "url",
        placeholder: "https://yourwebsite.com",
      },
      {
        name: "industry",
        label: "Industry Type",
        type: "select",
        required: true,
        options: [
          { label: "Technology", value: "technology" },
          { label: "Education", value: "education" },
          { label: "Healthcare", value: "healthcare" },
          { label: "Finance", value: "finance" },
          { label: "Other", value: "other" },
        ],
      },
      {
        name: "contactMethod",
        label: "Preferred Contact Method",
        type: "select",
        required: true,
        options: [
          { label: "Email", value: "email" },
          { label: "Phone", value: "phone" },
        ],
      },
      {
        name: "subject",
        label: "Subject",
        type: "text",
        placeholder: "What's this about?",
        required: true,
        colSpan: 2,
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Your message...",
        required: true,
        colSpan: 2,
      },
      {
        name: "terms",
        label: "I agree to the Terms and Conditions and Privacy Policy",
        type: "checkbox",
        required: true,
        colSpan: 2,
      },
    ],
    [],
  );

  const handleChange = (name: string, value: string | boolean) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Hero
        bgColor="bg-slate-900"
        accentColor="text-cyan-300"
        title="Contact Us"
        subtitle="Reach the right team for partnerships, membership, careers, support, or general questions."
        label="Support"
      />

      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {[
            { title: "Response Window", detail: "Within 24 hours" },
            { title: "Business Hours", detail: "Sun-Fri, 10 AM - 6 PM" },
            { title: "Location", detail: "Kathmandu, Nepal" },
            { title: "Primary Email", detail: "info@espot.com" },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400 mb-2">
                {item.title}
              </div>
              <div className="text-lg font-bold text-slate-900">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Map (left) */}
          <div className="w-full h-[880px] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm md:col-span-1">
            <iframe
              title="E-SPOT Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.019282019994!2d85.3082112!3d27.6987904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19aeb31a6e95%3A0xcd023f4bf7ccc580!2sEntrepreneurs%20Club%20Nepal!5e0!3m2!1sen!2snp!4v1710768000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
          {/* Contact Form */}
          <div className="md:col-span-2">
            <form
              className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 sm:p-8 space-y-6"
              onSubmit={handleSubmit}
            >
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-slate-500 mb-6">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>
              <DynamicForm
                fields={fields}
                values={formValues}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="mt-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
