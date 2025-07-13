import Image from "next/image";
import { Button } from "./ui/button";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";

interface ImageLightboxProps {
  readonly src: string;
  readonly alt: string;
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export function ImageLightbox({
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
      {/* Header Controls */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleZoomOut}
            disabled={zoom <= 0.5}
            className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={resetZoom}
            className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm text-xs px-3"
          >
            {Math.round(zoom * 100)}%
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleZoomIn}
            disabled={zoom >= 3}
            className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

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
            Pellizca para hacer zoom • Toca para cerrar
          </p>
        </div>
      </div>
    </div>
  );
}
