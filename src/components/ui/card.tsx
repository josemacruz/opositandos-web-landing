type CardProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export function Card({ children, className }: CardProps) {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg ${className}`}>
      {children}
    </div>
  );
}
