"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-6xl sm:text-7xl font-extrabold text-[#EB5757] mb-4">
        404
      </h1>
      <p className="text-xl sm:text-2xl text-gray-700 mb-8 text-center max-w-lg">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="inline-flex items-center space-x-2 bg-[#EB5757] hover:bg-[#d64545] text-white px-6 py-3 rounded-lg text-lg font-medium transition"
      >
        <Home className="w-5 h-5" />
        <span>Volver al inicio</span>
      </Link>
    </div>
  );
}
