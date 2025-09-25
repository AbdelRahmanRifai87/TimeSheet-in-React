import React, { useEffect, useRef, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

// ✅ NEW: Import Zustand store
import { useDarkModeStore } from "../Theme/useDarkModeStore"; // adjust path if needed

const menuItems = [
  { label: "Dashboard", icon: "fas fa-home" },
  { label: "Yours Details", icon: "fas fa-id-card" },
  { label: "Task Manager", icon: "fas fa-tasks" },
  { label: "Users", icon: "fas fa-users" },
  { label: "Locations", icon: "fas fa-map-marker-alt" },
  { label: "Mobile", icon: "fas fa-mobile-alt" },
  { label: "Supported living", icon: "fas fa-user" },
  { label: "Reports", icon: "fas fa-file" },
  { label: "Rosters", icon: "fas fa-calendar" },
  { label: "Timesheets", icon: "fas fa-clock" },
  { label: "IR's & Logs", icon: "fas fa-book" },
  { label: "Documents", icon: "fas fa-file" },
  { label: "Messaging", icon: "fas fa-comments" },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  // ✅ Removed isDarkMode from props
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
  // ✅ Use Zustand for dark mode
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);

  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("PARTISAN");

  const [orderedCompanies, setOrderedCompanies] = useState([
    "PARTISAN",
    "GUARDIAN",
    "SAFEWATCH",
  ]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCompanyDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const companyLogos: Record<string, string> = {
    PARTISAN: "/partisan logo.png",
    GUARDIAN: "/guardian_global1.png",
    SAFEWATCH: "/Safewatch2_logo.png",
  };

  const getCompanySign = (company: string, isDarkMode: boolean): string => {
    switch (company) {
      case "PARTISAN":
        return "/PPS-LOGO-GOLDEN-1.ai-1 1.png";
      case "GUARDIAN":
        return isDarkMode ? "/guardiandark.png" : "/guardianlogolight.png";
      case "SAFEWATCH":
        return "/smallsafewatch.png";
      default:
        return "";
    }
  };

  useEffect(() => {
    setOrderedCompanies((prev) => {
      return [selectedCompany, ...prev.filter((c) => c !== selectedCompany)];
    });
  }, []);

  return (
    <aside
      className={` row-span-2 flex flex-col h-screen transition-colors duration-500 ease-in-out ${
        isDarkMode ? "bg-[#121212]" : "bg-[#2186d4]"
      }  overflow-hidden`}
    >
      {/* Company Logo Dropdown */}
      <div ref={dropdownRef} className="relative px-4 py-4">
        <button
          onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
          className="w-full flex items-center justify-between cursor-pointer select-none"
        >
          <div className="flex items-center gap-2">
            <img
              src={
                isCollapsed
                  ? getCompanySign(selectedCompany, isDarkMode)
                  : companyLogos[selectedCompany]
              }
              alt={`${selectedCompany} Logo`}
              className={`object-contain ${
                isCollapsed
                  ? "w-10 h-10 transition-colors duration-1000 ease-in-out"
                  : "w-[700px] h-[70px]"
              }`}
            />
          </div>
          {!isCollapsed && (
            <i
              className={`fa-solid text-white fa-chevron-down text-xs opacity-65 ml-4 transition-transform duration-[1500ms] transform ${
                isCompanyDropdownOpen ? "rotate-180" : ""
              }`}
            />
          )}
        </button>

        {/* Dropdown */}
        {isCompanyDropdownOpen && !isCollapsed && (
          <ul
            className={`absolute z-50 mt-2 left-4 right-4 shadow-md rounded-md text-sm font-medium overflow-hidden ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-[#060808]"
            }`}
          >
            {orderedCompanies.map((company) => (
              <li
                key={company}
                onClick={() => {
                  setSelectedCompany(company);
                  setIsCompanyDropdownOpen(false);
                  setOrderedCompanies((prevCompanies) => {
                    const reordered = [
                      company,
                      ...prevCompanies.filter((c) => c !== company),
                    ];
                    return reordered;
                  });
                }}
                className={`px-4 py-2 cursor-pointer hover:bg-[#dbeeff] ${
                  isDarkMode ? "hover:bg-gray-700" : ""
                } ${
                  selectedCompany === company
                    ? isDarkMode
                      ? "text-[#81caff]"
                      : "text-[#248ee0]"
                    : isDarkMode
                    ? "text-white/70"
                    : "text-[#060808]"
                }`}
              >
                {company}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Divider */}
      <div className="px-4 my-4">
        <div
          className={`h-px w-full ${
            isDarkMode
              ? "bg-gradient-to-r from-transparent via-gray-600/25 to-transparent"
              : "bg-gradient-to-r from-white/5 via-white/30 to-white/5"
          }`}
        />
      </div>

      {/* Menu Items */}
      <nav className="menu-items-nav flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
        {menuItems.map((item) => (
          <React.Fragment key={item.label}>
            {(item.label === "Yours Details" ||
              item.label === "Locations" ||
              item.label === "Reports" ||
              item.label === "Documents") && (
              <div className="px-4 my-4">
                <div
                  className={`h-px w-full ${
                    isDarkMode
                      ? "bg-gradient-to-r from-white via-white-600/25 to-transparent"
                      : "bg-gradient-to-r from-white/5 via-white/30 to-white/5"
                  }`}
                />
              </div>
            )}

            <div
              className={`flex items-center cursor-pointer transition-colors duration-500 ${
                item.label === "Dashboard"
                  ? isDarkMode
                    ? "mx-3 my-1 rounded-lg bg-blue-500 text-white"
                    : "mx-3 my-1 rounded-lg bg-white text-[#2186d4]"
                  : isDarkMode
                  ? "mx-3 my-1 rounded-lg text-gray-300/65 hover:bg-gray-700"
                  : "mx-3 my-1 rounded-lg text-white/65 hover:bg-white/10"
              } ${
                isCollapsed
                  ? "justify-center px-1 py-3"
                  : "px-5 py-3 justify-between"
              }`}
            >
              <div className="flex items-center overflow-hidden whitespace-nowrap">
                <i
                  className={`${item.icon} ${isCollapsed ? "text-xl" : "mr-4"}`}
                ></i>
                {!isCollapsed && (
                  <span className="text-sm font-medium text-ellipsis overflow-hidden">
                    {item.label}
                  </span>
                )}
              </div>

              {!isCollapsed && item.label !== "Dashboard" && (
                <i className="fa-solid fa-chevron-down text-xs opacity-65" />
              )}
              {!isCollapsed && item.label === "Dashboard" && (
                <i className="fa-solid fa-chevron-right text-xs" />
              )}
            </div>
          </React.Fragment>
        ))}
      </nav>

      {/* Collapse Button */}
      <div className="mt-auto flex flex-col gap-3 py-4 px-4">
        <button
          className={`flex items-center justify-center rounded-md transition-colors duration-500 ${
            isDarkMode ? "bg-gray-800 text-blue-400" : "bg-white text-[#2186d4]"
          } ${isCollapsed ? "w-10 h-10" : "w-full py-3 px-4"}`}
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          {isCollapsed ? (
            <i className="fas fa-angle-right" />
          ) : (
            <>
              <span className="text-sm font-medium mr-2 ">trst Menu</span>
              <i className="fas fa-angle-left" />
            </>
          )}
        </button>
      </div>

      {/* Footer */}
      {!isCollapsed && (
        <div
          className={`flex flex-col items-center pb-4 text-xs ${
            isDarkMode ? "text-gray-400/65" : "text-white/65"
          }`}
        >
          {/* <div className="flex items-center gap-1 mt-1">
            <span>Powered by</span>
            <img
              src="/sec250.png"
              alt="Securecy Logo"
              className="h-5 object-contain"
            />
          </div> */}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
