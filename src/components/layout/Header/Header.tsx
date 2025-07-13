"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { LITERALS } from "./Header.literals";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import { HeaderDesktopMenu } from "./HeaderDesktopMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Opositandos"
              width={150}
              height={75}
              priority
            />
          </Link>

          <HeaderDesktopMenu />

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#EB5757] transition"
            aria-label={LITERALS.aria.openMenu}
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      <HeaderMobileMenu
        isOpen={mobileOpen}
        closeModal={() => setMobileOpen(false)}
      />
    </header>
  );
}
