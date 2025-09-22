import SidebarDivider from "./SidebarDivider";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";
import type { Page } from "../../Types/Page";
import { useSidebarContext } from "../../Context/SidebarContext";
interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  menuPages?: Page[];
}

const Sidebar: React.FC = () => {
  const { isCollapsed, setIsCollapsed, menuPages } = useSidebarContext();

  return (
    <aside className="row-span-2 bg-[#2186d4] flex flex-col">
      <div className="flex justify-center items-center py-4">
        {isCollapsed ? (
          <img src="/image.png" alt="Logo" className="w-10 h-10" />
        ) : (
          <img
            src="/partisan logo.png"
            alt="Logo"
            className="w-[200px] h-auto"
          />
        )}
      </div>
      <SidebarDivider />
      <SidebarMenu pages={menuPages || []} isCollapsed={isCollapsed} />
      <div className="mt-auto flex flex-col gap-3">
        <button
          className={`flex items-center justify-center my-8 bg-white text-[#2186d4] rounded-md mx-auto ${
            isCollapsed ? "w-10 h-10" : "w-[80%] py-3 px-4"
          }`}
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          {isCollapsed ? (
            <i className="fas fa-angle-right"></i>
          ) : (
            <>
              <span className="text-sm font-medium mr-2">Collapse Menu</span>
              <i className="fas fa-angle-left"></i>
            </>
          )}
        </button>
      </div>
      <SidebarFooter />
    </aside>
  );
};

export default Sidebar;
