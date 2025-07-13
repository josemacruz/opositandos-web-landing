import Image from "next/image";

export function ImageCard({
  src,
  rotate,
}: {
  readonly src: string;
  readonly rotate?: string;
}) {
  return (
    <div
      className={`transform ${rotate || "rotate-2"} hover:rotate-1 transition-transform duration-300`}
    >
      <div className="bg-black rounded-[2rem] p-1.5 shadow-2xl">
        <div className="bg-white rounded-[1.5rem] overflow-hidden">
          <Image src={src} alt="" width={220} height={440} priority />
        </div>
      </div>
    </div>
  );
}
