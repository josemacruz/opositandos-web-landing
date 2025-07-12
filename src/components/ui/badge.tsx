type BadgeProps = {
  readonly children: React.ReactNode;
  readonly className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${className}`}
    >
      {children}
    </span>
  );
}
