import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LINKS } from "./Header.constants";
import { LITERALS } from "./Header.literals";

export function HeaderDesktopMenu() {
  return (
    <>
      <nav className="hidden md:flex space-x-8 text-sm font-medium">
        {LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-gray-600 hover:text-[#EB5757] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost" className="text-gray-600 hover:text-black">
          {LITERALS.buttons.login}
        </Button>
        <Button className="bg-[#EB5757] hover:bg-[#d64545] text-white">
          {LITERALS.buttons.startNow}
        </Button>
      </div>
    </>
  );
}
