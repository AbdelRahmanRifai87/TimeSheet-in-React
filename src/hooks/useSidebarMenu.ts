import { useEffect, useState } from "react";
import { ApiService } from "../Api/ApiService";
import type { Page } from "../Types/Page";

const useSidebarMenu = () => {
  const [menuItems, setMenuItems] = useState<Page[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const pages = await ApiService.getMenuPages();
        setMenuItems(pages);
      } catch (error) {
        setError("Failed to fetch menu items");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  return { menuItems, loading, error };
};

export default useSidebarMenu;
