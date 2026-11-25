interface GreekKeyDividerProps {
  className?: string;
}

export function GreekKeyDivider({ className = "" }: GreekKeyDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`greek-key-rule opacity-85 ${className}`}
    />
  );
}
