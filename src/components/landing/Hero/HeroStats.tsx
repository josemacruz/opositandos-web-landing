type StatsProps = {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly delay: number;
};

export function Stats({ value, label, color, delay }: StatsProps) {
  return (
    <div
      className={`text-center transition-all duration-700 ease-out transform`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-3xl font-bold" style={{ color }}>
        {value}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
