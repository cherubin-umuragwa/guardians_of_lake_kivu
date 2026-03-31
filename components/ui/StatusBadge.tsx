interface StatusBadgeProps {
  message: string;
  type?: "warning" | "error" | "info";
}

export default function StatusBadge({
  message,
  type = "warning",
}: StatusBadgeProps) {
  const colors = {
    warning: "bg-yellow-50 border-yellow-400 text-yellow-800",
    error: "bg-red-50 border-red-400 text-red-800",
    info: "bg-blue-50 border-blue-400 text-blue-800",
  };

  return (
    <div
      role="status"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium ${colors[type]}`}
    >
      <span aria-hidden="true">⚠</span>
      {message}
    </div>
  );
}
