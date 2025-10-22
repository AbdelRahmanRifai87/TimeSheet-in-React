import React, { useEffect } from "react";
import { ApiService } from "../../Api/ApiService";
import Sidebar from "./Sidebar";
import { useSidebarContext } from "../../Context/SidebarContext";

const SidebarContainer: React.FC = () => {
  const { setMenuPages } = useSidebarContext();

  // Fetch menu pages from the ApiService
  useEffect(() => {
    const fetchMenuPages = async () => {
      try {
        const pages = await ApiService.getMenuPages();
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
