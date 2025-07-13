import { ImageCard } from "./HeroImageCard";

export function MobileMockups({ visible }: { readonly visible: boolean }) {
  return (
    <div
      className={`flex justify-center lg:justify-end relative transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="flex gap-6">
        <ImageCard src="/images/mobile-app.png" />
        <ImageCard src="/images/mobile-feedback.png" rotate="-rotate-2" />
      </div>
    </div>
  );
}
