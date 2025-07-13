"use client";

import { useState } from "react";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Dashboard from "@/components/landing/Dashboard";
import ContentSection from "@/components/landing/ContentSection";
import Cta from "@/components/landing/Cta";
import { PricingModal } from "@/components/modals/PricingModal";
import { ContactModal } from "@/components/modals/ContactModal";

export const dynamic = "force-static";

export default function LandingPage() {
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <Hero />

      <Features />
      <Dashboard />
      <ContentSection />
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
