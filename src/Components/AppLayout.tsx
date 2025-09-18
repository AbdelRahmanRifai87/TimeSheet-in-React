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


                <main className="col-span-1 row-span-1   overflow-auto">
                    <div className="  mx-auto flex flex-col gap-[3.2rem]" >
                        <Outlet />
                    </div>
                </main>

            </div>

        </>
    )

}
export default AppLayout;