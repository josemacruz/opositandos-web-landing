import Image from "next/image";
import { useState } from "react";
import { DashboardHeaderControls } from "./DashboardHeaderControls";
import { LITERALS } from "./Dashboard.literals";

interface ImageLightboxProps {
  readonly src: string;
  readonly alt: string;
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export function DashboardImageLightbox({
  src,
  alt,
  isOpen,
  onClose,
}: ImageLightboxProps) {
  const [zoom, setZoom] = useState(1);

  if (!isOpen) return null;

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.5, 0.5));
  };

  const resetZoom = () => {
    setZoom(1);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <DashboardHeaderControls
        zoom={zoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onResetZoom={resetZoom}
        onClose={onClose}
      />

      {/* Image Container */}
      <div className="w-full h-full flex items-center justify-center overflow-auto">
        <div
          className="transition-transform duration-300 ease-out"
          style={{ transform: `scale(${zoom})` }}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={1200}
            height={800}
            priority
          />
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
          <p className="text-white text-sm text-center">
            {LITERALS.mobileHint}
          </p>
        </div>
      </div>
    </div>
  );
}
