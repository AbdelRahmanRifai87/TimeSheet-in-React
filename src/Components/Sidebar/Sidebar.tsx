import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";
import { useSidebarContext } from "../../Context/SidebarContext";
import { useEffect, useRef, useState } from "react";
import { useDarkModeStore } from "../../Theme/useDarkModeStore"; // zustand store

const Sidebar: React.FC = () => {
  const { isCollapsed, setIsCollapsed, menuPages } = useSidebarContext();

  const styles = useDarkModeStore((state) => state.styles);

  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("SECURECY");
  const [orderedCompanies, setOrderedCompanies] = useState([
    "SECURECY",
    "GUARDIAN",
    "SAFEWATCH",
  ]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const companyLogos: Record<string, string> = {
    SECURECY: "/logo_white copy.png",
    GUARDIAN: "/guardian_global1.png",
    SAFEWATCH: "/Safewatch2_logo.png",
  };

  const companySigns: Record<string, string> = {
    SECURECY: "/logo_color1.png",
    GUARDIAN: "/logo_color1.png",
    SAFEWATCH: "/logo_color1.png",
  };

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

  return (
    <aside
      className="row-span-2 flex flex-col transition-all duration-300"
      style={{
        backgroundColor: styles.sidebarBg,
        color: styles.sidebarText,
      }}
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
            isCollapsed ? "w-10 h-10" : "w-[400px] h-[35px]"
          }`}
        />
        {!isCollapsed && (
          <i
            className={`fas fa-chevron-down absolute bottom-2 opacity-70  right-4 text-xs transition-transform duration-300 ${
              isCompanyDropdownOpen ? "rotate-180" : ""
            }`}
          />
        )}

        {/* Dropdown list */}
        {isCompanyDropdownOpen && !isCollapsed && (
          <div
            className="absolute top-full mt-2 w-[200px] shadow-lg rounded-md z-50"
            style={{
              backgroundColor: styles.sidebarBg,
              color: styles.sidebarText,
            }}
          >
            {orderedCompanies.map((company) => (
              <div
                key={company}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  setSelectedCompany(company);
                  setIsCompanyDropdownOpen(false);
                }}
              >
                <img
                  src={companyLogos[company]}
                  alt={`${company} logo`}
                  className="w-24 h-auto object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sidebar Menu */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
        <SidebarMenu
          pages={menuPages || []}
          isCollapsed={isCollapsed}
          customTheme={{
            background: styles.sidebarBg,
            text: styles.sidebarText,
            button: styles.sidebarBtn,
            hover: styles.sidebarHover,
          }}
        />
      </div>

      {/* Collapse Button */}
      <div className="mt-auto flex flex-col gap-3">
        <button
          className={`flex items-center justify-center rounded-md mx-auto transition-all duration-300 ${
            isCollapsed ? "w-10 h-10" : "w-[80%] py-3 px-4"
          }`}
          onClick={() => setIsCollapsed((prev) => !prev)}
          style={{
            backgroundColor: styles.sidebarBtn,
            color: styles.sidebarText,
          }}
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
