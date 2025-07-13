import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LITERALS } from "./Header.literals";
import { LINKS } from "./Header.constants";

export function HeaderMobileMenu({
  isOpen,
  closeModal,
}: Readonly<{
  isOpen: boolean;
  closeModal: () => void;
}>) {
  return (
    <div
      className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="px-4 py-4 space-y-4">
        {/* Navigation links */}
        <nav className="flex flex-col space-y-2">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-[#EB5757] py-2 border-b border-gray-100 transition-colors"
              onClick={closeModal}
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
            onClick={closeModal}
          >
            {LITERALS.buttons.login}
          </Button>
          <Button className="w-full bg-[#EB5757] hover:bg-[#d64545] text-white">
            {LITERALS.buttons.startNow}
          </Button>
        </div>
      </div>
    </div>
  );
}
