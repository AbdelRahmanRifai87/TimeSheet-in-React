import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { useState } from "react";



function AppLayout() {
    const [isCollapsed, setIsCollapsed] = useState(false);


    return (

        <>
            <div className={`grid  grid-rows-[auto_1fr] h-screen `} style={{
                gridTemplateColumns: isCollapsed ? "60px 1fr" : "26rem 1fr",
            }}>
                <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
                <TopBar />


                <main className="bg-blue-200 px-[4.8rem] pt-[4rem] pb-[6.4rem] overflow-auto">
                    <div className="col-span-1 row-span-1 max-w-[120rem] mx-auto flex flex-col gap-[3.2rem]" >
                        <Outlet />
                    </div>
                </main>

            </div>

        </>
    )

}
export default AppLayout;