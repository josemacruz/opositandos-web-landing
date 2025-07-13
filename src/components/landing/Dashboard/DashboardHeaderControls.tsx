import { Button } from "@/components/ui/button";
import { X, ZoomIn, ZoomOut } from "lucide-react";

export function DashboardHeaderControls({
  zoom,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onClose,
}: Readonly<{
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
  onClose: () => void;
}>) {
  return (
    <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onZoomOut}
          disabled={zoom <= 0.5}
          className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
        >
          <ZoomOut className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onResetZoom}
          className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm text-xs px-3"
        >
          {Math.round(zoom * 100)}%
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onZoomIn}
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
  );
}
