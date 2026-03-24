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

      {/* Company Values */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Our Commitment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cyan-50 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-cyan-700 mb-2">
                Responsive Support
              </h3>
              <p className="text-slate-700 text-sm">
                We respond to every inquiry with care and urgency, ensuring you
                feel heard and valued.
              </p>
            </div>
            <div className="bg-cyan-50 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-cyan-700 mb-2">
                Expert Guidance
              </h3>
              <p className="text-slate-700 text-sm">
                Our team is equipped to help with everything from partnerships
                to technical support and membership questions.
              </p>
            </div>
            <div className="bg-cyan-50 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-cyan-700 mb-2">Global Reach</h3>
              <p className="text-slate-700 text-sm">
                We serve members and partners worldwide, adapting to your needs
                and time zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col gap-3">
              <p className="text-slate-700 italic">
                “The E-SPOT support team resolved my issue within hours. I felt
                truly valued as a member.”
              </p>
              <div className="flex items-center gap-3 mt-2">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Ravi"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <span className="font-bold text-cyan-700">Ravi Shrestha</span>
                  <span className="block text-xs text-slate-500">
                    Entrepreneur
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col gap-3">
              <p className="text-slate-700 italic">
                “Quick, friendly, and professional—E-SPOT’s team made our
                partnership seamless.”
              </p>
              <div className="flex items-center gap-3 mt-2">
                <img
                  src="https://randomuser.me/api/portraits/women/33.jpg"
                  alt="Maya"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <span className="font-bold text-cyan-700">Maya Gurung</span>
                  <span className="block text-xs text-slate-500">Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Process Timeline */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            How We Help
          </h2>
          <ol className="relative border-l-2 border-cyan-200 ml-4">
            <li className="mb-10 ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-cyan-600 rounded-full text-white font-bold">
                1
              </span>
              <h3 className="font-semibold text-cyan-700">
                Submit Your Request
              </h3>
              <p className="text-slate-700 text-sm">
                Fill out the contact form or email us directly with your
                question or need.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-cyan-600 rounded-full text-white font-bold">
                2
              </span>
              <h3 className="font-semibold text-cyan-700">
                We Review & Respond
              </h3>
              <p className="text-slate-700 text-sm">
                Our team reviews your message and connects you with the right
                expert or department.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-cyan-600 rounded-full text-white font-bold">
                3
              </span>
              <h3 className="font-semibold text-cyan-700">
                Resolution & Follow-up
              </h3>
              <p className="text-slate-700 text-sm">
                We resolve your issue or answer your question, and follow up to
                ensure satisfaction.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-cyan-700 mb-1">
                How quickly will I get a response?
              </h3>
              <p className="text-slate-700 text-sm">
                We aim to respond to all inquiries within 24 hours during
                business days.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-cyan-700 mb-1">
                Can I visit your office?
              </h3>
              <p className="text-slate-700 text-sm">
                Yes, please schedule an appointment in advance so we can best
                assist you.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-cyan-700 mb-1">
                Who should I contact for partnerships?
              </h3>
              <p className="text-slate-700 text-sm">
                Use the form and select 'Partnership' as your subject, or email
                info@espot.com directly.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-cyan-700 mb-1">
                Is my information kept private?
              </h3>
              <p className="text-slate-700 text-sm">
                Absolutely. We never share your details without your consent.
                See our Privacy Policy for more.
              </p>
            </div>
          </div>
        </div>
      </section>

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
