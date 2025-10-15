// import SidebarDivider from "./SidebarDivider";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";
import { useSidebarContext } from "../../Context/SidebarContext";
import { useEffect, useRef, useState } from "react";
import { useDarkModeStore } from "../../Theme/useDarkModeStore"; // zustand store

const Sidebar: React.FC = () => {
  const { isCollapsed, setIsCollapsed, menuPages } = useSidebarContext();

  const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);

  // Company dropdown state
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("ULTIMATE");
  const [orderedCompanies, setOrderedCompanies] = useState([
    "ULTIMATE",
    "GUARDIAN",
    "SAFEWATCH",
  ]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Logos
  const companyLogos: Record<string, string> = {
    ULTIMATE: "/ultimatesecurity2.png",
    GUARDIAN: "/guardian_global1.png",
    SAFEWATCH: "/Safewatch2_logo.png",
  };
  const companySigns: Record<string, string> = {
    ULTIMATE:
      effectiveTheme === "dark" || effectiveTheme === "night"
        ? "/logo_white.png"
        : "/logo_color1.png",
    GUARDIAN: "/logo_color1.png",
    SAFEWATCH: "/logo_color1.png",
  };

  // Click outside dropdown
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

  useEffect(() => {
    setOrderedCompanies([
      selectedCompany,
      ...orderedCompanies.filter((c) => c !== selectedCompany),
    ]);
  }, []);

  const sidebarBg =
    effectiveTheme === "light"
      ? "bg-[#235e8b]"
      : effectiveTheme === "dark"
      ? "bg-[#0f2739]"
      : effectiveTheme === "night"
      ? "bg-[#0f0f0f]"
      : "bg-[#235e8b]";

  return (
    <aside
      className={`row-span-2 flex flex-col transition-all duration-300   ${sidebarBg}`}
    >
      {/* Company Logo */}

      <div
        ref={dropdownRef}
        className="relative px-3 py-1 flex mb-2 justify-start cursor-pointer"
        onClick={() => setIsCompanyDropdownOpen((prev) => !prev)}
      >
        <img
          src={
            isCollapsed
              ? companySigns[selectedCompany]
              : companyLogos[selectedCompany]
          }
          alt={`${selectedCompany} Logo`}
          className={`object-contain transition-all duration-300 ${
            isCollapsed ? "w-10 h-10" : "w-[500px] h-[45px]"
          }`}
        />
        {!isCollapsed && (
          // <i
          //   className={`fas fa-chevron-down absolute bottom-3 right-0.25 text-white transition-transform duration-300 ${
          //     isCompanyDropdownOpen ? "rotate-180" : ""
          //   }`}
          // />
          <i
            className={`fas fa-chevron-down absolute bottom-3 right-1 text-white text-xs transition-transform duration-300 ${
              isCompanyDropdownOpen ? "rotate-180" : ""
            }`}
          />
        )}
        {/* Dropdown list */}
        {isCompanyDropdownOpen && !isCollapsed && (
          <div
            className={`absolute top-full mt-2 w-[200px] shadow-lg rounded-md z-50 ${
              effectiveTheme === "light"
                ? "bg-[#625d5d] text-black"
                : effectiveTheme === "dark"
                ? "bg-[#8e8e8e] text-white"
                : effectiveTheme === "night"
                ? "bg-[#312f2f] text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {orderedCompanies.map((company) => (
              <div
                key={company}
                className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  setSelectedCompany(company);
                  setIsCompanyDropdownOpen(false);
                }}
              >
                {company}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden  no-scrollbar ">
        <SidebarMenu pages={menuPages || []} isCollapsed={isCollapsed} />
      </div>
      {/* <SidebarDivider /> */}

      {/* Menu */}

      {/* Collapse Button */}
      <div className="mt-auto  flex flex-col gap-3 ">
        <button
          className={`flex items-center justify-center  bg-[#EDEDED80] text-[#F5F5DC] rounded-md mx-auto transition-all duration-300 ${
            isCollapsed ? "w-10 h-10" : "w-[80%] py-3 px-4"
          }`}
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          {isCollapsed ? (
            <i className="fas fa-angle-right"></i>
          ) : (
            <>
              <span className="text-sm font-medium mr-2 ">Collapse Menu</span>
              <i className="fas fa-angle-left"></i>
            </>
          )}
        </button>
      </div>

      <SidebarFooter />
    </aside>
  );
};

export default Sidebar;
