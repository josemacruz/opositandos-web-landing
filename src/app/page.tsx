"use client";

import { useState } from "react";

import { PricingModal } from "@/components/modals/PricingModal";
import { ContactModal } from "@/components/modals/ContactModal";
import Hero from "@/components/landing/Hero/Hero";
import Features from "@/components/landing/Features/Features";
import Dashboard from "@/components/landing/Dashboard/Dashboard";
import Content from "@/components/landing/Content/Content";
import Cta from "@/components/landing/Cta/Cta";

export const dynamic = "force-static";

export default function LandingPage() {
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <Hero />

      <Features />
      <Dashboard />
      <Content />
      <Cta
        onContact={() => setShowContactModal(true)}
        onPricing={() => setShowPricingModal(true)}
      />

      <PricingModal
        isOpen={showPricingModal}
        onClose={() => setShowPricingModal(false)}
      />
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </>
  );
}
