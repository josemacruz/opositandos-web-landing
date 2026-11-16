import type { Metadata } from "next";
import BlackFriday from "@/components/black-friday/BlackFriday";

export const metadata: Metadata = {
  title: "Black Friday",
  description:
    "Black Friday en Opositandos: hasta un 50% de descuento en todos los planes para preparar tus oposiciones a Policía Local.",
  alternates: { canonical: "/black-friday" },
};

export default function Page() {
  return <BlackFriday />;
}
