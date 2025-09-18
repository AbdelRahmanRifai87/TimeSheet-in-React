import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./topbar/TopBar";
import { useState } from "react";

function AppLayout() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <>
            <div
                className={`grid  grid-rows-[auto_1fr] h-screen `}
                style={{
                    gridTemplateColumns: isCollapsed ? "60px 1fr" : "26rem 1fr",
                    transition: "all 350ms ease-in-out",
                }}
            >
                <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
                <TopBar
                    userName="Mohamad Zakaria"
                    companyName="Partisan Protective Services"
                    userAvatarUrl="https://columbus.in.us/wp-content/uploads/2020/01/person-01.jpg"
                />




                <main className="col-span-1 row-span-1 rounded-lg   overflow-auto">
                    <div className="  mx-auto flex flex-col gap-[3.2rem]" >
                        <Outlet />
                    </div>
                </main>

            </div>

        </>
    )

}
export default AppLayout;
