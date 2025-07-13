"use client";

import { useEffect, useState } from "react";
import { DASHBOARD_TABS } from "./Dashboard.constants";
import { DashboardTabNavigation } from "./DashboardTabNavigation";
import { DashboardMainDisplay } from "./DashboardMainDisplay";
import { DashboardImageLightbox } from "./DashboardImageLightBox";
import { LITERALS } from "./Dashboard.literals";

export default function Dashboard() {
  const [tab, setTab] = useState<keyof typeof DASHBOARD_TABS>("dashboard");
  const currentTab = DASHBOARD_TABS[tab];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleImageClick = () => {
    if (isMobile) {
      setLightboxOpen(true);
    }
  };

  return (
    <section id="dashboard" className="py-20 bg-gray-50 scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
            {LITERALS.title.normal}
            <span className="bg-[#EB5757]/20 px-2 py-1">
              {LITERALS.title.highlighted}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {LITERALS.description}
          </p>
        </div>
        <DashboardTabNavigation activeTab={tab} onTabChange={setTab} />
        <DashboardMainDisplay
          tab={tab}
          onTabChange={setTab}
          isMobile={isMobile}
          handleImageClick={handleImageClick}
          currentTab={currentTab}
        />
      </div>
      <DashboardImageLightbox
        src={currentTab.image || "/placeholder.svg"}
        alt={currentTab.title}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
