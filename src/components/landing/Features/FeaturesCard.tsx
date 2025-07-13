export const FeaturesCard = ({
  icon: Icon,
  title,
  desc,
  highlight,
  color,
  delay,
  animate = true,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  highlight: string;
  color: string;
  delay: number;
  animate?: boolean;
}) => (
  <div
    className={`
        group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm
        hover:shadow-xl hover:scale-105 transform transition-all duration-300
        flex flex-col justify-between h-full
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div>
      <div
        className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl"
        style={{ backgroundColor: `${color}1A` }}
      >
        <Icon className="w-7 h-7" style={{ color }} />
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-black mb-3">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-4">{desc}</p>
    </div>
    <span
      className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
      style={{ color }}
    >
      ✓ {highlight}
    </span>
  </div>
);
