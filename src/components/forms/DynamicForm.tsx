import type { ReactNode } from 'react';

type BaseField = {
  name: string;
  label: string;
  required?: boolean;
  colSpan?: 1 | 2;
};

export type DynamicFormField =
  | (BaseField & {
      type: 'text' | 'email' | 'tel' | 'url' | 'number' | 'date' | 'month' | 'password';
      placeholder?: string;
      icon?: ReactNode;
    })
  | (BaseField & {
      type: 'select';
      options: Array<{ label: string; value: string }>;
      icon?: ReactNode;
      placeholder?: string;
    })
  | (BaseField & {
      type: 'textarea';
      placeholder?: string;
      rows?: number;
    })
  | (BaseField & {
      type: 'checkbox';
      description?: ReactNode;
    });

type Value = string | boolean;

type Props = {
  fields: DynamicFormField[];
  values: Record<string, Value>;
  onChange: (name: string, value: Value) => void;
  className?: string;
};

export default function DynamicForm({ fields, values, onChange, className }: Props) {
  return (
    <div className={className ?? 'grid grid-cols-1 md:grid-cols-2 gap-6'}>
      {fields.map((field) => {
        const wrapper = field.colSpan === 2 ? 'md:col-span-2' : '';

        if (field.type === 'checkbox') {
          return (
            <div key={field.name} className={wrapper}>
              <label className="flex items-start gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={Boolean(values[field.name])}
                  onChange={(e) => onChange(field.name, e.target.checked)}
                  className="mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  required={field.required}
                />
                <span>
                  <span className="font-semibold text-slate-700">{field.label}</span>
                  {field.description ? <span className="block mt-0.5">{field.description}</span> : null}
                </span>
              </label>
            </div>
          );
        }

        return (
          <div key={field.name} className={wrapper}>
            <label className="block text-sm font-bold text-slate-700 mb-1">{field.label}</label>

            {field.type === 'textarea' ? (
              <textarea
                value={String(values[field.name] ?? '')}
                onChange={(e) => onChange(field.name, e.target.value)}
                required={field.required}
                rows={field.rows ?? 5}
                placeholder={field.placeholder}
                className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow min-h-[120px]"
              />
            ) : field.type === 'select' ? (
              <div className="relative">
                {field.icon ? <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{field.icon}</div> : null}
                <select
                  value={String(values[field.name] ?? '')}
                  onChange={(e) => onChange(field.name, e.target.value)}
                  required={field.required}
                  className={`w-full border border-slate-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow ${field.icon ? 'pl-10' : ''}`}
                >
                  <option value="">{field.placeholder ?? `Select ${field.label}`}</option>
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="relative">
                {field.icon ? <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{field.icon}</div> : null}
                <input
                  type={field.type}
                  value={String(values[field.name] ?? '')}
                  onChange={(e) => onChange(field.name, e.target.value)}
                  required={field.required}
                  placeholder={field.placeholder}
                  className={`w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow ${field.icon ? 'pl-10' : ''}`}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
