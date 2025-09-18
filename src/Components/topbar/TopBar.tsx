import React, { useState, useRef, useEffect } from "react";
import {
  FaMoon,
  FaBolt,
  FaQuestionCircle,
  FaBookmark,
  FaCog,
  FaBell,
  FaBuilding,
  FaSearch,
} from "react-icons/fa";
import { topBarStyles } from "./TopBar.styles";

interface TopBarProps {
  userName: string;
  companyName: string;
  userAvatarUrl?: string;
}

const companies = [
  "Partisan Protective Services",
  "Guardian Global",
  "SafeWatch Security",
];

const TopBar: React.FC<TopBarProps> = ({
  userName,
  companyName,
  userAvatarUrl,
}) => {
  const [selectedCompany, setSelectedCompany] = useState(companyName);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // New: reorder companies array putting selectedCompany at top
  const orderedCompanies = [
    selectedCompany,
    ...companies.filter((c) => c !== selectedCompany),
  ];

  return (
    <div className={topBarStyles.topbar}>
      {/* Left */}
      <div className={topBarStyles.companyContainer} ref={dropdownRef}>
        <FaBuilding className={topBarStyles.companyIcon} />
        <div
          className="relative cursor-pointer select-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center pr-[18px] text-[#248ee0] font-semibold text-[14px] ">
            {selectedCompany}
            <svg
              className="w-4 h-4 ml-2 relative top-[2px] left-[4px] text-[#004578]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-full z-50">
              {/* Triangle */}
              <div className="absolute top-[-8px] right-[13px] w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>

              {/* Dropdown List */}
              <ul className="bg-white shadow-md rounded-md text-sm font-medium overflow-hidden">
                {orderedCompanies.map((company) => (
                  <li
                    key={company}
                    onClick={() => {
                      setSelectedCompany(company);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-2 cursor-pointer hover:bg-[#dbeeff] ${selectedCompany === company
                        ? "text-[#248ee0]" // Blue color for selected
                        : "text-[#06080839]" // Dark/grey for others
                      }`}
                  >
                    {company}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Center */}
      <div className={topBarStyles.topbarCenter}>
        <div className={topBarStyles.searchContainer}>
          <FaSearch className={topBarStyles.searchIcon} />
          <input
            type="text"
            placeholder="Global search"
            className={topBarStyles.searchInput}
          />
        </div>
      </div>

      {/* Right */}
      <div className={topBarStyles.topbarRight}>
        <button className={topBarStyles.iconButton}>
          <FaMoon className={topBarStyles.icon} />
          <span className="sr-only">Toggle Dark Mode</span>
        </button>
        <button className={topBarStyles.iconButton}>
          <FaBolt className={topBarStyles.icon} />
          <span className="sr-only">Quick Actions</span>
        </button>
        <button className={topBarStyles.iconButton}>
          <FaQuestionCircle className={topBarStyles.icon} />
          <span className="sr-only">Help</span>
        </button>
        <button className={topBarStyles.iconButton}>
          <FaBookmark className={topBarStyles.icon} />
          <span className="sr-only">Bookmarks</span>
        </button>
        <button className={topBarStyles.iconButton}>
          <FaCog className={topBarStyles.icon} />
          <span className="sr-only">Settings</span>
        </button>
        <button className={topBarStyles.iconButton}>
          <FaBell className={topBarStyles.icon} />
          <span className="sr-only">Notifications</span>
        </button>
        {userAvatarUrl && (
          <img
            src={userAvatarUrl}
            alt="User avatar"
            className={topBarStyles.avatar}
          />
        )}
        <span className={topBarStyles.userName}>{userName}</span>
      </div>
    </div>
  );
};

export default TopBar;
