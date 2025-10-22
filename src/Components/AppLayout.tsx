import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import SidebarContainer from "./Sidebar/SidebarContainer";
import TopBar from "./topbar/TopBar";
import { useSidebarContext } from "../Context/SidebarContext";
import { useDarkModeStore } from "../Theme/useDarkModeStore";

function AppLayout() {
  const { isCollapsed } = useSidebarContext();
  const theme = useDarkModeStore((s) => s.theme);
  const effectiveTheme = useDarkModeStore((s) => s.effectiveTheme);
  const setTheme = useDarkModeStore((s) => s.setTheme);
  const styles = useDarkModeStore((s) => s.styles);

  useEffect(() => {
    if (theme !== "system") return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => setTheme("system");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme, setTheme]);

  return (
    <div
      className="grid grid-rows-[auto_1fr] h-screen"
      style={{
        gridTemplateColumns: isCollapsed ? "3rem 1fr" : "13rem 1fr",
        transition: "all 350ms ease-in-out",
      }}
    >
      <SidebarContainer />

      <TopBar
        userName="User name"
        userAvatarUrl="https://columbus.in.us/wp-content/uploads/2020/01/person-01.jpg"
      />

      <main
        className={`  col-span-1 row-span-1 rounded-tl-lg  min-h-[calc(93.5vh + 1px)] outline outline-black overflow-auto transition-colors duration-500
          `}
        style={{ backgroundColor: styles.mainBg, color: styles.mainText }}
      >
        <div className="mx-auto flex flex-col">
          <Outlet context={{ theme, effectiveTheme }} />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
