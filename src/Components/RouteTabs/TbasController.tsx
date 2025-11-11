import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { findRouteMeta } from "../../routes/config";
import { useRouteTabsStore } from "../../Context/useRouteTabStore";

/** Mount this once inside the Router to keep the store in sync with the URL */
export default function TabsController() {
  const { pathname } = useLocation();
  const ensureTab = useRouteTabsStore((s) => s.ensureTab);
  const setActive = useRouteTabsStore((s) => s.setActive);

  useEffect(() => {
    const meta = findRouteMeta(pathname);
    if (!meta) return;

    ensureTab({
      path: meta.path,
      label: meta.label,
      closable: meta.closable !== false, // default true
    });
    setActive(pathname);
  }, [pathname, ensureTab, setActive]);

  return null;
}
