"use client";

import Link from "next/link";
import { FacebookIcon, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import { ContactModal } from "../../modals/ContactModal";
import { useContactModal } from "@/hooks/useContactModal";
import { LITERALS } from "./Footer.literals";

export default function Footer() {
  const { isOpen, openModal, closeModal } = useContactModal();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt={LITERALS.logoAlt}
                width={100}
                height={50}
                priority
              />
            </Link>
            <p className="text-gray-600 text-sm">{LITERALS.description}</p>
            <div className="flex space-x-3 mt-4">
              <Link
                href="#"
                className="text-gray-500 hover:text-[#EB5757] transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-[#EB5757] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-[#EB5757] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Soporte */}
          <div>
            <h3 className="font-semibold text-black mb-4">
              {LITERALS.supportTitle}
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <button
                  type="button"
                  className="hover:text-black text-left w-full"
                  onClick={openModal}
                >
                  {LITERALS.links.helpCenter}
                </button>
              </li>
              <li>
                <Link href="faq" className="hover:text-black">
                  {LITERALS.links.faq}
                </Link>
              </li>
              <li>
                <Link href="term-and-conditions" className="hover:text-black">
                  {LITERALS.links.terms}
                </Link>
              </li>
              <li>
                <Link href="policy" className="hover:text-black">
                  {LITERALS.links.privacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} opositandos. {LITERALS.copyright}
          </p>
          <div className="mt-4 md:mt-0">{LITERALS.tagline}</div>
        </div>
      </div>
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </footer>
  );
}
