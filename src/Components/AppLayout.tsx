import { Outlet } from "react-router-dom";
import SidebarContainer from "./Sidebar/SidebarContainer";
import TopBar from "./topbar/TopBar";
import { useSidebarContext } from "../Context/SidebarContext";

function AppLayout() {
  const { isCollapsed } = useSidebarContext();

  return (
    <>
      <div
        className={`grid grid-rows-[auto_1fr] h-screen`}
        style={{
          gridTemplateColumns: isCollapsed ? "60px 1fr" : "17rem 1fr",
          transition: "all 350ms ease-in-out",
        }}
      >
        <SidebarContainer />
        <TopBar
          userName="Mohamad Zakaria"
          companyName="Partisan Protective Services"
          userAvatarUrl="https://columbus.in.us/wp-content/uploads/2020/01/person-01.jpg"
        />
        <main className="col-span-1 row-span-1 rounded-lg bg-[#F1F3F3] min-h-[93.5vh] overflow-auto">
          <div className="mx-auto flex flex-col gap-[3.2rem]">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
export default AppLayout;
