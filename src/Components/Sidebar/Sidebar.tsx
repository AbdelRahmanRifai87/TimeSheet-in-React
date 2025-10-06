

import SidebarDivider from "./SidebarDivider";
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
  const [selectedCompany, setSelectedCompany] = useState("PARTISAN");
  const [orderedCompanies, setOrderedCompanies] = useState([
    "PARTISAN",
    "GUARDIAN",
    "SAFEWATCH",
  ]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Logos
  const companyLogos: Record<string, string> = {
    PARTISAN: "/partisan logo.png",
    GUARDIAN: "/guardian_global1.png",
    SAFEWATCH: "/Safewatch2_logo.png",
  };
  const companySigns: Record<string, string> = {
    PARTISAN:
      effectiveTheme === "dark" || effectiveTheme === "night"
        ? "/image-dark.png"
        : "/image.png",
    GUARDIAN: "/guardianglobal22.png",
    SAFEWATCH: "/smallsafewatch.png",
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
      className={`row-span-2 flex flex-col transition-all duration-300 overflow-hidden ${sidebarBg}`}
    >
      {/* Company Logo */}
      <div ref={dropdownRef} className="relative px-4 py-4 flex justify-center">
        <img
          src={
            isCollapsed
              ? companySigns[selectedCompany]
              : companyLogos[selectedCompany]
          }
          alt={`${selectedCompany} Logo`}
          className={`object-contain transition-all duration-300 ${
            isCollapsed ? "w-10 h-10" : "w-[200px] h-auto"
          }`}
        />
      </div>

      <SidebarDivider />

      {/* Menu */}
      <SidebarMenu pages={menuPages || []} isCollapsed={isCollapsed} />

      {/* Collapse Button */}
      <div className="mt-auto flex flex-col gap-3">
        <button
          className={`flex items-center justify-center my-8 bg-[#EDEDED80] text-[#F5F5DC] rounded-md mx-auto transition-all duration-300 ${
            isCollapsed ? "w-10 h-10" : "w-[80%] py-3 px-4"
          }`}
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          {isCollapsed ? (
            <i className="fas fa-angle-right"></i>
          ) : (
            <>
              <span className="text-sm font-medium mr-2">Collapse Menu</span>
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
