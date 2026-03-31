interface FormFieldProps {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  value: string;
  error?: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
}

export default function FormField({
  id,
  label,
  type,
  value,
  error,
  onChange,
  required = false,
  placeholder,
}: FormFieldProps) {
  const baseClass =
    "w-full px-4 py-3 min-h-[44px] rounded-lg border text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-water-teal transition-colors " +
    (error
      ? "border-red-500 bg-red-50 focus:ring-red-400"
      : "border-gray-300 bg-white focus:border-water-teal");

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          placeholder={placeholder}
          rows={4}
          className={baseClass + " resize-y"}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          placeholder={placeholder}
          className={baseClass}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
        />
      )}

      {error && (
        <p id={`${id}-error`} role="alert" className="text-red-600 text-sm mt-0.5">
          {error}
        </p>
      )}
    </div>
  );
}
