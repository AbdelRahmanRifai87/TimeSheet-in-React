
import React, { useEffect, useRef, useState } from "react";
import { useDarkModeStore } from "./useDarkModeStore";
import Draggable from "react-draggable";
import { HexColorPicker } from "react-colorful";

type SectionTheme = {
  background: string;
  text: string;
  button: string;
};

type CustomTheme = {
  sidebar: SectionTheme;
  topbar: SectionTheme;
  main: SectionTheme;
  globalBackground?: string;
};

interface CustomThemePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const defaultSection = {
  background: "#ffffff",
  text: "#000000",
  button: "#4a90e2",
};

const defaultCustomTheme: CustomTheme = {
  sidebar: {
    ...defaultSection,
    background: "#235e8b",
    text: "#ffffff",
    button: "#EDEDED80",
  },
  topbar: {
    ...defaultSection,
    background: "#235e8b",
    text: "#ffffff",
    button: "rgba(255,255,255,0.1)",
  },
  main: { ...defaultSection, background: "#1C75BC26", text: "#000000" },
};

const CustomThemePopup: React.FC<CustomThemePopupProps> = ({
  isOpen,
  onClose,
}) => {
  const { customTheme, setCustomTheme } = useDarkModeStore();
  const [localTheme, setLocalTheme] = useState<CustomTheme>(
    customTheme ?? defaultCustomTheme
  );
  const nodeRef = useRef<HTMLDivElement>(null);
  const [originalTheme, setOriginalTheme] = useState<CustomTheme>(
    customTheme ?? defaultCustomTheme
  );

  
  useEffect(() => {
    if (isOpen) {
      const baseTheme = customTheme ?? defaultCustomTheme;
      setOriginalTheme(baseTheme);
      setLocalTheme(baseTheme);

      
      setIsDarkMode(baseTheme.main.background === "#1f1f1f");
      setIsSidebarDarkText(baseTheme.sidebar.text !== "#ffffff");

      
      setCustomTheme(baseTheme);
    }
  }, [isOpen]);

  type SectionKey = "sidebar" | "topbar" | "main";

  
  const lightenColor = (hex: string, percent: number) => {
    const cleanHex = hex.replace("#", "");
    const hexFull =
      cleanHex.length === 3
        ? cleanHex
            .split("")
            .map((c) => c + c)
            .join("")
        : cleanHex;
    const num = parseInt(hexFull, 16);
    let r = (num >> 16) & 0xff;
    let g = (num >> 8) & 0xff;
    let b = num & 0xff;
    r = Math.min(255, Math.floor(r + (255 - r) * percent));
    g = Math.min(255, Math.floor(g + (255 - g) * percent));
    b = Math.min(255, Math.floor(b + (255 - b) * percent));
    return (
      "#" +
      [r, g, b]
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase()
    );
  };

  const darkenColor = (hex: string, percent: number) => {
    const cleanHex = hex.replace("#", "");
    const hexFull =
      cleanHex.length === 3
        ? cleanHex
            .split("")
            .map((c) => c + c)
            .join("")
        : cleanHex;
    const num = parseInt(hexFull, 16);
    let r = (num >> 16) & 0xff;
    let g = (num >> 8) & 0xff;
    let b = num & 0xff;
    r = Math.max(0, Math.floor(r * (1 - percent)));
    g = Math.max(0, Math.floor(g * (1 - percent)));
    b = Math.max(0, Math.floor(b * (1 - percent)));
    return (
      "#" +
      [r, g, b]
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase()
    );
  };
  const [isSidebarDarkText, setIsSidebarDarkText] = useState(
    localTheme.sidebar.text === "#ffffff"
  );

  const toggleSidebarText = () => {
    const newText = isSidebarDarkText ? "#ffffff" : "#262727"; 
    setIsSidebarDarkText(!isSidebarDarkText);

    
    setLocalTheme((prev) => ({
      ...prev,
      sidebar: { ...prev.sidebar, text: newText },
      topbar: { ...prev.topbar, text: newText },
    }));

    
    setCustomTheme({
      ...customTheme,
      sidebar: { ...customTheme.sidebar, text: newText },
      topbar: { ...customTheme.topbar, text: newText },
    });
  };

  
  const handleSectionChange = (
    section: SectionKey,
    key: keyof SectionTheme,
    value: string
  ) => {
    setLocalTheme((prev) => {
      let updatedTheme: CustomTheme;

     
      if (section === "sidebar" || section === "topbar") {
        let newBackground = prev.sidebar.background;
        let newButton = prev.sidebar.button;

        if (key === "background") {
          newBackground = value;
          newButton = lightenColor(value, 0.2);
        } else if (key === "button") {
          newButton = value;
          newBackground = darkenColor(value, 0.2);
        }

        updatedTheme = {
          ...prev,
          sidebar: {
            ...prev.sidebar,
            background: newBackground,
            button: newButton,
            text: prev.sidebar.text,
          },
          topbar: {
            ...prev.topbar,
            background: newBackground,
            button: newButton,
            text: prev.topbar.text,
          },
          main: { ...prev.main, button: newButton },
        };
      } else {
        updatedTheme = {
          ...prev,
          [section]: { ...(prev[section] as SectionTheme), [key]: value },
        };
      }

      
      setCustomTheme(updatedTheme);

      return updatedTheme;
    });
  };

  
  const [isDarkMode, setIsDarkMode] = useState(
    localTheme.main.background === "#1f1f1f"
  );

  
  const setMainBackground = (mode: "white" | "dark") => {
    const newBg = mode === "white" ? "#ffffff" : "#1f1f1f";
    const newText = mode === "white" ? "#262727" : "#ffffff"; 

    setIsDarkMode(mode === "dark"); 

    
    setLocalTheme((prev) => ({
      ...prev,
      main: {
        ...prev.main,
        background: newBg,
        text: newText,
      },
      globalBackground: newBg, 
    }));

    
    setCustomTheme({
      ...customTheme,
      main: {
        ...customTheme.main,
        background: newBg,
        text: newText,
      },
      globalBackground: newBg,
    });
  };

  
  const handleReset = () => {
    const resetTheme: CustomTheme = {
      sidebar: {
        background: "#235e8b",
        text: "#ffffff",
        button: "#EDEDED80",
      },
      topbar: {
        background: "#235e8b",
        text: "#ffffff",
        button: "rgba(255,255,255,0.1)",
      },
      main: {
        background: "#ffffff",
        text: "#000000",
        button: defaultCustomTheme.main.button,
      },
      globalBackground: "#ffffff",
    };

    
    setLocalTheme(resetTheme);

   
    setCustomTheme(resetTheme);

    
    setIsDarkMode(false);
    setIsSidebarDarkText(false);
  };

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0  flex items-center justify-center z-[9999]">
      <div className="relative w-full h-full flex items-center justify-center">
        <Draggable
          bounds="parent"
          nodeRef={nodeRef}
          cancel=".color-picker, input, button"
        >
          <div
            ref={nodeRef}
            className="relative border bg-[#bfb9b982] border-gray-300  backdrop-blur-sm bg-white-800/70 p-2  rounded-lg shadow-lg w-[220px] max-h-[70vh] overflow-y-auto cursor-move"
          >
            
            <div className="space-y-1 items-center justify-center">
              {(["topbar"] as SectionKey[]).map((section) => {
                const s = localTheme[section];
                return (
                  <div key={section}>
                    <div className="grid grid-cols-2 gap-3 items-center">
                      {/* Background */}
                      <label className="flex flex-col gap-2 col-span-2 items-center w-full">
                        <HexColorPicker
                          color={s.background}
                          onChange={(c) =>
                            handleSectionChange(section, "background", c)
                          }
                          className=" color-picker w-full h-40 rounded-lg"
                        />
                        <input
                          title="background"
                          type="text"
                          value={s.background}
                          onChange={(e) =>
                            handleSectionChange(
                              section,
                              "background",
                              e.target.value
                            )
                          }
                          className="  w-32 text-center "
                        />
                      </label>
                    </div>
                  </div>
                );
              })}

              {/* Main Section */}
              <div className="mt-4 relative flex justify-between items-center w-full">
                {/* Main Section Toggle with label */}
                <div className="flex flex-col items-center">
                  <span className="text-xs mb-1">Main</span>
                  <label
                    className={`toggle-btn relative ${
                      isDarkMode ? "toggled" : ""
                    }`}
                    onClick={() => {
                      const newMode = !isDarkMode ? "dark" : "white";
                      setIsDarkMode(!isDarkMode);
                      setMainBackground(newMode);
                    }}
                  >
                    {/* Sliding Light/Dark label */}
                    <span
                      className={`absolute inset-0 flex items-center text-[8px] font-semibold pointer-events-none transition-all duration-300 ${
                        isDarkMode
                          ? "justify-start pl-[6px] text-white"
                          : "justify-end pr-[6px] text-black"
                      }`}
                    >
                      {isDarkMode ? "Dark" : "Light"}
                    </span>

                    {/* Thumb */}
                    <div className="thumb"></div>
                  </label>
                </div>

                {/* Sidebar/Topbar Text Toggle with label */}
                <div className="flex flex-col items-center">
                  <span className="text-xs mb-1">Shell</span>
                  <label
                    className={`toggle-btn relative ${
                      isSidebarDarkText ? "toggled" : ""
                    }`}
                    onClick={toggleSidebarText}
                  >
                    {/* Sliding Light/Dark label (independent from Main toggle) */}
                    <span
                      className={`absolute inset-0 flex items-center text-[8px] font-semibold pointer-events-none transition-all duration-300 ${
                        isSidebarDarkText
                          ? "justify-start pl-[6px] text-white"
                          : "justify-end pr-[6px] text-black"
                      }`}
                    >
                      {isSidebarDarkText ? "Dark" : "Light"}
                    </span>

                    <div className="thumb"></div>
                  </label>
                </div>

                {/* Defaults button */}
                <button
                  onClick={handleReset}
                  className="absolute left-1/2 -translate-x-1/2 
      bg-transparent text-
      px-3 
      hover:text-gray-500 hover:underline dark:text-gray-500 dark:hover:text-gray-400"
                >
                  Reset Default
                </button>
              </div>
            </div>

            
            <div className="flex justify-between items-center gap-3 mt-6">
              {/* Cancel button restores the original theme */}
              <button
                onClick={() => {
                  setCustomTheme(originalTheme);
                  setIsDarkMode(originalTheme.main.background === "#1f1f1f");
                  setIsSidebarDarkText(
                    originalTheme.sidebar.text === "#ffffff"
                  );
                  onClose();
                }}
                className="px-3 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>

              {/* Save button keeps current theme */}
              <button
                onClick={() => {
                  onClose(); 
                }}
                className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Save
              </button>
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default CustomThemePopup;
