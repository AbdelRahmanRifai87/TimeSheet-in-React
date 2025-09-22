import SidebarDivider from "./SidebarDivider";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";
import { useSidebarContext } from "../../Context/SidebarContext";
import { useEffect, useRef, useState } from "react";

interface SidebarProps {
  isDarkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isDarkMode }) => {
  const { isCollapsed, setIsCollapsed, menuPages } = useSidebarContext();

  // Company dropdown state
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("PARTISAN");
  const [orderedCompanies, setOrderedCompanies] = useState([
    "PARTISAN",
    "GUARDIAN",
    "SAFEWATCH",
  ]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Company logos mapping
  const companyLogos: Record<string, string> = {
    PARTISAN: "/partisan logo.png",
    GUARDIAN: "/guardian_global1.png",
    SAFEWATCH: "/safewatch_logo.png",
  };

  const companySigns: Record<string, string> = {
    PARTISAN: "/image.png",
    GUARDIAN: "/guardianglobal22.png",
    SAFEWATCH: "/smallsafewatch.png",
  };

  // Handle clicks outside dropdown
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

  // Initialize ordered companies list
  useEffect(() => {
    setOrderedCompanies((prev) => {
      return [selectedCompany, ...prev.filter((c) => c !== selectedCompany)];
    });
  }, []);

  return (
    <aside
      className={`row-span-2 flex flex-col ${
        isDarkMode ? "bg-[#121212]" : "bg-[#2186d4]"
      }`}
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
                  ? companySigns[selectedCompany]
                  : companyLogos[selectedCompany]
              }
              alt={`${selectedCompany} Logo`}
              className={`object-contain ${
                isCollapsed ? "w-10 h-10" : "w-[200px] h-auto"
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

        {/* Company Dropdown Menu */}
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

      <SidebarDivider />
      <SidebarMenu pages={menuPages || []} isCollapsed={isCollapsed} />
      <div className="mt-auto flex flex-col gap-3">
        <button
          className={`flex items-center justify-center my-8 bg-white text-[#2186d4] rounded-md mx-auto ${
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
