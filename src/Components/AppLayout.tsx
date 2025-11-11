import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import SidebarContainer from "./Sidebar/SidebarContainer";
import TopBar from "./topbar/TopBar";
import { useSidebarContext } from "../Context/SidebarContext";
import { useDarkModeStore } from "../Theme/useDarkModeStore";
import RouteTabsBar from "./RouteTabs/RouteTabsBar";

function AppLayout() {
  const { isCollapsed } = useSidebarContext();
  const theme = useDarkModeStore((s) => s.theme);
  const effectiveTheme = useDarkModeStore((s) => s.effectiveTheme);
  const setTheme = useDarkModeStore((s) => s.setTheme);

  useEffect(() => {
    if (theme !== "system") return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => setTheme("system");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme, setTheme]);

  return (
    <div
      className="grid  h-screen font-montserrat"
      style={{
        gridTemplateColumns: isCollapsed ? "4rem 1fr" : "15rem 1fr",
        transition: "all 350ms ease-in-out",
      }}
    >
      <aside className="col-[1] row-[1] overflow-y-auto">
        <SidebarContainer />
      </aside>

      <div className="col-[2] row-[1] grid grid-rows-[auto_auto_1fr] min-h-0">
        {/* Row 1: Top bar */}
        <header className="row-[1]">
          <TopBar
            userName="User name"
            userAvatarUrl="https://columbus.in.us/wp-content/uploads/2020/01/person-01.jpg"
          />
        </header>

        {/* Row 2: Tabs */}
        <div className="row-[2]">
          <RouteTabsBar />
        </div>

        {/* Row 3: Main scrollable content */}
        <main
          className={[
            "row-[3] min-h-0 overflow-auto transition-colors duration-500 ",
            effectiveTheme === "dark" || effectiveTheme === "night"
              ? "bg-[#0d0d0df3] text-white"
              : "bg-[#E6F1FA] text-black",
          ].join(" ")}
        >
          <div className="w-full fixed h-2 bg-inherit z-10"></div>
          <div className="mx-auto flex flex-col">
            <Outlet context={{ theme, effectiveTheme }} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
