import type { Metadata } from "next";
import BlackFriday from "@/components/black-friday/BlackFriday";

export const metadata: Metadata = {
  title: "Black Friday",
  description:
    "Black Friday en Opositandos: 20% de descuento en cualquier plan con el código BLACKFRIDAY26 para preparar tus oposiciones a Policía Local.",
  alternates: { canonical: "/black-friday" },
};

export default function Page() {
  return <BlackFriday />;
}
