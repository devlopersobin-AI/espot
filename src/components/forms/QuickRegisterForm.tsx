import { useState, type FormEvent } from 'react';

type QuickRegisterFormProps = {
  heading: string;
  targetLabel: string;
  submitLabel?: string;
  onClose?: () => void;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  notes: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  notes: '',
};

export default function QuickRegisterForm({
  heading,
  targetLabel,
  submitLabel = 'Submit Registration',
  onClose,
}: QuickRegisterFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const existing = localStorage.getItem('quick-registrations');
    const list = existing ? JSON.parse(existing) : [];

    list.push({
      id: Date.now(),
      heading,
      targetLabel,
      ...form,
      createdAt: new Date().toISOString(),
    });

    localStorage.setItem('quick-registrations', JSON.stringify(list));
    setIsSubmitted(true);
    setForm(initialState);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">Registration Form</p>
          <h3 className="mt-1 text-xl font-bold text-slate-900">{heading}</h3>
          <p className="mt-1 text-sm text-slate-600">You are registering for: <span className="font-semibold text-slate-900">{targetLabel}</span></p>
        </div>
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
          >
            Close
          </button>
        ) : null}
      </div>

      {isSubmitted ? (
        <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Registration sent successfully. Our team will contact you soon.
        </div>
      ) : null}

      <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">Full Name</span>
          <input
            required
            value={form.name}
            onChange={(event) => handleChange('name', event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => handleChange('email', event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">Phone</span>
          <input
            value={form.phone}
            onChange={(event) => handleChange('phone', event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Optional"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="mb-1 block text-sm font-semibold text-slate-700">Notes</span>
          <textarea
            rows={4}
            value={form.notes}
            onChange={(event) => handleChange('notes', event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell us what you are looking for"
          />
        </label>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}
