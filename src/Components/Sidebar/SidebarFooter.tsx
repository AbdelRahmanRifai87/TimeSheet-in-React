import React from "react";
import { useSidebarContext } from "../../Context/SidebarContext";

const SidebarFooter: React.FC = () => {
  const { isCollapsed } = useSidebarContext();
  return (
    <div
      className={`flex flex-col items-center py-4 ${
        isCollapsed ? "text-gray-400/65" : "text-white/65"
      } text-xs`}
    >
      {!isCollapsed && (
        <div className="flex items-center mt-1">
          <span>Powered by </span>
          <img src="/sec250.png" alt="Securecy Logo" className="h-5 mr-1" />
        </div>
      )}
    </div>
  );
};

export default SidebarFooter;
