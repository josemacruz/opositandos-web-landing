"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Características", href: "#features" },
    { label: "Plataforma", href: "#dashboard" },
    { label: "Contenido", href: "#content" },
  ];

  return (
    <header className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          {/* Logo + tagline */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Opositandos"
              width={150}
              height={75}
              className="h-auto w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-[#EB5757] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-black">
              Iniciar Sesión
            </Button>
            <Button className="bg-[#EB5757] hover:bg-[#d64545] text-white">
              Empezar ahora
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#EB5757] transition"
            aria-label="Abrir menú"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          {/* Navigation links */}
          <nav className="flex flex-col space-y-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-[#EB5757] py-2 border-b border-gray-100 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-4">
            <Button
              variant="ghost"
              className="w-full text-gray-600 hover:text-black"
              onClick={() => setMobileOpen(false)}
            >
              Iniciar Sesión
            </Button>
            <Button className="w-full bg-[#EB5757] hover:bg-[#d64545] text-white">
              Empezar ahora
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
