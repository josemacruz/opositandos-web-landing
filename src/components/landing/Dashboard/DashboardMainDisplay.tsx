import { Expand } from "lucide-react";
import { TabKey } from "./Dashboard.types";
import Image from "next/image";
import { DASHBOARD_TABS } from "./Dashboard.constants";
import { LITERALS } from "./Dashboard.literals";

export function DashboardMainDisplay({
  tab,
  onTabChange,
  isMobile,
  handleImageClick,
  currentTab,
}: Readonly<{
  tab: TabKey;
  onTabChange: (tab: TabKey) => void;
  isMobile?: boolean;
  handleImageClick?: () => void;
  currentTab: {
    image: string;
    title: string;
    callouts: {
      icon: React.ComponentType<{ className?: string }>;
      color: string;
      title: string;
      description: string;
    }[];
  };
}>) {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Main Image Card */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
        {/* Browser Header */}
        <div className="bg-gray-100 px-6 py-4 border-b flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 bg-white rounded-md px-4 py-2 ml-6 max-w-md">
            <div className="text-sm text-gray-600 flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              {`${LITERALS.url}${tab}`}
            </div>
          </div>
          <div className="ml-auto flex items-center space-x-2 text-sm text-gray-500">
            <div className="hidden md:block">{LITERALS.desktopSecurity}</div>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Image Container */}
        <div className="p-4 lg:p-6 bg-gray-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg relative group">
            {/* Mobile Expand Indicator */}
            {isMobile && (
              <div className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Expand className="w-4 h-4 text-white" />
              </div>
            )}

            {/* Mobile Tap Hint */}
            {isMobile && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs">{LITERALS.tapHint}</p>
              </div>
            )}

            <div
              className={`transition-all duration-500 ease-in-out ${isMobile ? "cursor-pointer" : ""}`}
              onClick={handleImageClick}
            >
              <Image
                src={currentTab.image || "/placeholder.svg"}
                alt={currentTab.title}
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="sm:hidden ">
            <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4">
              {currentTab.callouts.map((callout, idx) => {
                const Icon = callout.icon;
                return (
                  <div
                    key={callout.title}
                    className="snap-start min-w-[80%] bg-white p-6 rounded-2xl flex-shrink-0
                              transform transition-transform duration-300 hover:scale-105"
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex justify-center mb-4">
                      <div
                        className="w-16 h-16 bg-[#EB5757] bg-opacity-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${callout.color}1A` }}
                      >
                        <Icon className={`w-8 h-8`} />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-black mb-2 text-center">
                      {callout.title}
                    </h4>
                    <p className="text-gray-600 text-sm text-center">
                      {callout.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
            {currentTab.callouts.map((callout, idx) => {
              const Icon = callout.icon;
              return (
                <div
                  key={callout.title}
                  className="bg-white p-6 rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="text-center mb-4">
                    <div
                      className="w-14 h-14 bg-[#EB5757] bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${callout.color}1A` }}
                    >
                      <Icon className={`w-7 h-7`} />
                    </div>
                    <h4 className="font-semibold text-black text-base mb-2 group-hover:text-[#EB5757] transition-colors">
                      {callout.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {callout.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="flex items-center space-x-2">
          {Object.entries(DASHBOARD_TABS).map(([key, tabData]) => (
            <button
              key={key}
              onClick={() => onTabChange(key as TabKey)}
              className={`transition-all duration-300 flex items-center justify-center`}
              style={
                tab === key
                  ? {
                      width: 32,
                      height: 8,
                      backgroundColor: `#${tabData.color}`,
                      borderRadius: 9999,
                      border: "2px solid #fff",
                      boxShadow: "0 0 0 2px #e5e7eb",
                    }
                  : {
                      width: 8,
                      height: 8,
                      backgroundColor: "#d1d5db",
                      borderRadius: 9999,
                    }
              }
              aria-label={tabData.shortTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
