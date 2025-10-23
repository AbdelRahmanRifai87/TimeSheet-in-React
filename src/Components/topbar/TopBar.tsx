import React, { useState, useRef, useEffect } from "react";
import {
  FaSun,
  FaMoon,
  FaRegMoon,
  FaDesktop,
  FaPalette,
  FaBell,
  FaQuestionCircle,
  FaCog,
  FaBullhorn,
  FaSearch,
} from "react-icons/fa";
import { topBarStyles } from "./TopBar.styles";
import { useDarkModeStore } from "../../Theme/useDarkModeStore";
import CustomThemePopup from "../../Theme/CustomThemePopup";
import { useSidebarContext } from "../../Context/SidebarContext";
import type { Page } from "../../Types/Page";
import { useNavigate } from "react-router-dom";
interface TopBarProps {
  userName: string;
  userAvatarUrl?: string;
}

const TopBar: React.FC<TopBarProps> = ({ userName, userAvatarUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomPopup, setShowCustomPopup] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const theme = useDarkModeStore((s) => s.theme);
  const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);
  const helpMenuRef = useRef<HTMLDivElement>(null);

  const styles = useDarkModeStore((s) => s.styles);
  const setTheme = useDarkModeStore((s) => s.setTheme);
  const { menuPages } = useSidebarContext();
  const getChildrenPages = (parentId: number): Page[] => {
    return menuPages.filter((p) => p.parentId === parentId);
  };
  const effectiveTheme = useDarkModeStore((s) => s.effectiveTheme);
  const customTheme = useDarkModeStore((s) => s.customTheme);
  useEffect(() => {
    let bodyColor = "#ffffff"; // fallback

    if (effectiveTheme === "light") {
      bodyColor = "#235e8b";
    } else if (effectiveTheme === "dark") {
      bodyColor = "#0f2739";
    } else if (effectiveTheme === "night") {
      bodyColor = "#0f0f0f";
    } else if (effectiveTheme === "custom") {
      bodyColor = customTheme.topbar.background;
    }

    document.body.style.backgroundColor = bodyColor;
  }, [
    effectiveTheme,
    customTheme.topbar.background,
    customTheme.globalBackground,
  ]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        helpMenuRef.current &&
        !helpMenuRef.current.contains(event.target as Node)
      ) {
        setIsHelpMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderThemeIcon = () => {
    switch (theme) {
      case "light":
        return <FaSun className={topBarStyles.icon} />;
      case "dark":
        return <FaMoon className={topBarStyles.icon} />;
      case "night":
        return <FaRegMoon className={topBarStyles.icon} />;
      case "system":
        return <FaDesktop className={topBarStyles.icon} />;
      case "custom":
        return <FaPalette className={topBarStyles.icon} />;
      default:
        return null;
    }
  };
  // const placeholderStyle = {
  //   color: styles.searchText,
  //   opacity: 0.7, // match previous placeholder opacity
  // };

  return (
    <>
      <style>
        {`
        #global-search::placeholder {
          color: ${styles.searchText};
          opacity: 0.7;
          transition: color 0.6s ease-in-out;
        }
      `}
      </style>
      <div
        className={topBarStyles.topbar}
        style={{ backgroundColor: styles.topbarBg, color: styles.topbarText }}
      >
        {/* Left: Search */}
        <div
          className={topBarStyles.searchContainer}
          style={{ backgroundColor: styles.searchBg, color: styles.searchText }}
        >
          <FaSearch className="w-4 h-4" style={{ color: styles.searchText }} />
          <input
            id="global-search" // <-- important!
            type="text"
            placeholder="Global search"
            className={topBarStyles.searchInput}
            style={{ color: styles.searchText }}
          />
        </div>

        {/* Right icons */}
        <div className={topBarStyles.topbarRight}>
          {/* Theme selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className={topBarStyles.iconButton}
              style={{
                backgroundColor: styles.topbarBtn,
                color: styles.topbarText,
              }}
              title="Theme Mode"
            >
              {React.cloneElement(renderThemeIcon()!, {
                style: { color: styles.topbarText }, // make icon inherit custom color
              })}
            </button>

            {isOpen && (
              <div
                className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg p-2 z-50"
                style={{
                  backgroundColor: styles.dropdownBg,
                  color: styles.dropdownText,
                }}
              >
                {["light", "dark", "night", "system", "custom"].map((t) => (
                  <button
                    key={t}
                    className="w-full flex justify-between items-center text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                    onClick={() => {
                      setTheme(t as any);
                      if (t === "custom") setShowCustomPopup(true);
                      setIsOpen(false);
                    }}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                    {t === "light" && <FaSun />}
                    {t === "dark" && <FaMoon />}
                    {t === "night" && <FaRegMoon />}
                    {t === "system" && <FaDesktop />}
                    {t === "custom" && <FaPalette />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Other action buttons */}
          {/* Right icons (replaced images with real icons) */}
          {[
            {
              id: "notifications",
              title: "Notifications",
              icon: <FaBullhorn />,
            },
            { id: "help", title: "Help & Support", icon: <FaQuestionCircle /> },
            { id: "settings", title: "Settings", icon: <FaCog /> },
            { id: "updates", title: "What's New", icon: <FaBell /> },
          ].map((item, i) => {
            // Special case for Help & Support dropdown
            if (item.id === "help") {
              return (
                <div key={i} className="relative" ref={helpMenuRef}>
                  <button
                    type="button"
                    title={item.title}
                    className={topBarStyles.iconButton}
                    style={{
                      backgroundColor: styles.topbarBtn,
                      color: styles.topbarText,
                    }}
                    onClick={() => setIsHelpMenuOpen((prev) => !prev)}
                  >
                    {item.icon}
                  </button>

                  {isHelpMenuOpen && (
                    <div
                      className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg p-2 z-50"
                      style={{
                        backgroundColor: styles.dropdownBg,
                        color: styles.dropdownText,
                      }}
                    >
                      {getChildrenPages(15).map((child: Page) => (
                        <button
                          key={child.id}
                          className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded flex items-center gap-2"
                          onClick={() => {
                            navigate(child.path);
                            setIsHelpMenuOpen(false);
                          }}
                        >
                          <i className={`${child.icon} w-4 text-sm`}></i>
                          <span>{child.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // Default case: simple icon button
            return (
              <button
                key={i}
                type="button"
                title={item.title}
                className={topBarStyles.iconButton}
                style={{
                  backgroundColor: styles.topbarBtn,
                  color: styles.topbarText, // 👈 dynamically inherits your custom text color
                }}
              >
                {item.icon}
              </button>
            );
          })}

          {/* User profile button */}

          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setIsUserMenuOpen((prev) => !prev)}
              className="flex items-center gap-2 p-1 rounded"
              style={{ color: styles.topbarText }}
            >
              {userAvatarUrl && (
                <img
                  src={userAvatarUrl}
                  alt="User avatar"
                  className={topBarStyles.avatar}
                  style={{ borderColor: styles.topbarBtn }}
                />
              )}
              <span>{userName}</span>
            </button>

            {isUserMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg p-2 z-50"
                style={{
                  backgroundColor: styles.dropdownBg,
                  color: styles.dropdownText,
                }}
              >
                {getChildrenPages(2).map((child: Page) => (
                  <button
                    key={child.id}
                    className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded flex items-center gap-2"
                    onClick={() => {
                      navigate(child.path);
                      setIsUserMenuOpen(false);
                    }}
                  >
                    <i className={`${child.icon} w-4 text-sm`}></i>
                    <span>{child.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom theme popup */}
      <CustomThemePopup
        isOpen={showCustomPopup}
        onClose={() => setShowCustomPopup(false)}
      />
    </>
  );
};

export default TopBar;
