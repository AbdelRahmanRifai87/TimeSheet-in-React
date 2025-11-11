import React from "react";
import { useSidebarContext } from "../../Context/SidebarContext";
import { useDarkModeStore } from "../../Theme/useDarkModeStore";

const SidebarFooter: React.FC = () => {
  const { isCollapsed } = useSidebarContext();
  const { customTheme } = useDarkModeStore();

  const textColor = customTheme?.sidebar?.text || "#ffffff";

  return (
    <div
      className="flex flex-col items-center py-2 text-xs"
      style={{
        color: isCollapsed ? `${textColor}A6` : textColor,
        transition: "color 0.3s ease",
      }}
    >
      {!isCollapsed && (
        <div className="flex flex-col items-center mt-0">
          <span>Powered by</span>
          <img src="sec250.png" alt="Securecy Logo" className="h-5 mt-1" />
        </div>
      )}
    </div>
  );
};

export default SidebarFooter;
