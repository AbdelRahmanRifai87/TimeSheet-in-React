import React, { useEffect } from "react";
import { ApiService } from "../../Api/ApiService";
import Sidebar from "../Sidebar/Sidebar";
import { useSidebarContext } from "../../Context/SidebarContext";

interface SidebarContainerProps {
  isDarkMode: boolean;
}

const SidebarContainer: React.FC<SidebarContainerProps> = ({ isDarkMode }) => {
  const { setMenuPages } = useSidebarContext();

  // Fetch menu pages from the ApiService
  useEffect(() => {
    console.log("SidebarContainer: Fetching menu pages");
    const fetchMenuPages = async () => {
      try {
        const pages = await ApiService.getMenuPages();
        console.log("Menu pages fetched successfully:", pages);
        setMenuPages(pages);
      } catch (error) {
        console.error("Error fetching menu pages:", error);
      }
    };
    fetchMenuPages();
  }, [setMenuPages]);

  return <Sidebar />;
};

export default SidebarContainer;
