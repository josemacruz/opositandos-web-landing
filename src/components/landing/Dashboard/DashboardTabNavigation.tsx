import { DASHBOARD_TABS } from "./Dashboard.constants";
import { TabKey } from "./Dashboard.type";

type DashboardTabNavigationProps = {
  readonly activeTab: TabKey;
  readonly onTabChange: (tab: TabKey) => void;
};

export function DashboardTabNavigation({
  activeTab,
  onTabChange,
}: DashboardTabNavigationProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
        <div className="hidden lg:flex space-x-2">
          {Object.entries(DASHBOARD_TABS).map(([key, tabData]) => {
            const IconComponent = tabData.icon;
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => onTabChange(key as TabKey)}
                className={`group relative flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                }`}
                style={
                  isActive
                    ? { backgroundColor: `#${tabData.color}` }
                    : undefined
                }
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={
                    isActive
                      ? { backgroundColor: "rgba(255,255,255,0.2)" }
                      : { backgroundColor: `#${tabData.color}1A` }
                  }
                >
                  <IconComponent
                    className={
                      "w-5 h-5 transition-all duration-300 " +
                      (isActive
                        ? "text-white"
                        : "text-[#" + tabData.color + "]")
                    }
                  />
                </div>
                <span className="text-sm font-medium">
                  {tabData.shortTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden grid grid-cols-3 gap-2">
          {Object.entries(DASHBOARD_TABS).map(([key, tabData]) => {
            const IconComponent = tabData.icon;
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => onTabChange(key as TabKey)}
                className={`group flex flex-col items-center space-y-2 px-2 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? `bg-[#${tabData.color}] text-white shadow-md`
                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                }`}
                style={
                  isActive
                    ? { backgroundColor: `#${tabData.color}` }
                    : undefined
                }
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={
                    isActive
                      ? { backgroundColor: "rgba(255,255,255,0.2)" }
                      : { backgroundColor: `#${tabData.color}1A` }
                  }
                >
                  <IconComponent
                    className={
                      "w-5 h-5 transition-all duration-300 " +
                      (isActive
                        ? "text-white"
                        : "text-[#" + tabData.color + "]")
                    }
                  />
                </div>
                <span className="text-xs font-medium leading-tight text-center">
                  {tabData.shortTitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
