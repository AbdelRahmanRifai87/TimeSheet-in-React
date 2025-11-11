// import { X } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useRouteTabsStore } from "../../Context/useRouteTabStore";

// export default function RouteTabsBar() {
//   const navigate = useNavigate();
//   const { tabs, activePath, removeTab } = useRouteTabsStore();

//   const onActivate = (path: string) => navigate(path);

//   const onClose = (path: string) => {
//     // compute fallback BEFORE removing
//     const list = tabs;
//     const idx = list.findIndex((t) => t.path === path);
//     if (idx === -1) return;

//     const closable = list[idx].closable !== false;
//     if (!closable) return;

//     const nextTabs = list.filter((t) => t.path !== path);
//     if (activePath === path) {
//       const neighbor = nextTabs[Math.max(0, idx - 1)];
//       navigate(neighbor.path);
//     }
//     removeTab(path);
//   };

//   return (
//     <div
//       className="px-4 md:px-6 pt-2 bg-[#A6CFF0]"
//       style={{ "--tabs-bg": "#E8F2FE" } as React.CSSProperties}
//     >
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-[var(--tabs-bg)]" />

//       <div className="relative z-10 flex flex-wrap gap-8">
//         {tabs.map((t) => {
//           const active = t.path === activePath;
//           return (
//             <div
//               key={t.path}
//               role="tab"
//               aria-selected={active}
//               onClick={() => onActivate(t.path)}
//               className={[
//                 "relative z-10  group flex items-center rounded-t-lg px-3 h-8 text-sm cursor-pointer select-none transition-all ",

//                 active ? "bg-[#E6F1FA] text-gray-900   " : " text-[#374151]  ",

//                 // `after:content-[''] after:absolute after:-bottom-[1px] after:left-[-11px] after:w-5 after:h-5 after:bg-[${
//                 //   active ? "var(--tabs-bg)" : ""
//                 // } ] after:rounded-tr-[20px]`,

//                 // // right corner
//                 // `before:content-[''] before:absolute before:-bottom-[1px] before:right-[1px] before:w-4 before:h-4 before:bg-[${
//                 //   active ? "var(--tabs-bg)" : ""
//                 // } ] before:rounded-tl-[20px]`,
//               ].join(" ")}
//               style={{
//                 // radius of the cut (match your rounding)
//                 ["--r" as any]: "16px",

//                 // WebKit (Chrome/Safari)
//                 WebkitMask:
//                   "radial-gradient(var(--r) at left bottom, transparent 98%, #000) bottom left," +
//                   "radial-gradient(var(--r) at right bottom, transparent 98%, #000) bottom right," +
//                   "linear-gradient(#000 0 0)",
//                 WebkitMaskSize: "var(--r) var(--r), var(--r) var(--r), auto",
//                 WebkitMaskRepeat: "no-repeat",

//                 // Firefox
//                 mask:
//                   "radial-gradient(var(--r) at left bottom, transparent 98%, #000) bottom left," +
//                   "radial-gradient(var(--r) at right bottom, transparent 98%, #000) bottom right," +
//                   "linear-gradient(#000 0 0)",
//                 maskSize: "var(--r) var(--r), var(--r) var(--r), auto",
//                 maskRepeat: "no-repeat",
//               }}
//             >
//               <span className="mr-2">{t.label}</span>
//               {t.closable !== false && (
//                 <button
//                   aria-label={`Close ${t.label}`}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     onClose(t.path);
//                   }}
//                   className="opacity-60  hover:opacity-100 -mr-1 p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
//                 >
//                   <X size={14} />
//                 </button>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRouteTabsStore } from "../../Context/useRouteTabStore";
import RightSVG from "../../assets/Vector.svg?react";
import LeftSVG from "../../assets/left.svg?react";

export default function RouteTabsBar() {
  const navigate = useNavigate();
  const { tabs, activePath, removeTab } = useRouteTabsStore();

  const onActivate = (path: string) => navigate(path);

  const onClose = (path: string) => {
    const list = tabs;
    const idx = list.findIndex((t) => t.path === path);
    if (idx === -1) return;
    if (list[idx].closable === false) return;

    const nextTabs = list.filter((t) => t.path !== path);
    if (activePath === path) {
      const neighbor = nextTabs[Math.max(0, idx - 1)];
      navigate(neighbor.path);
    }
    removeTab(path);
  };

  // ONE color used for the bar background and the tab cut-outs
  const tabsBg = "#A6CFF0"; // ← your blue

  return (
    <div
      className="relative px-4 md:px-6 pt-2"
      style={{ background: tabsBg, ["--tabs-bg" as any]: tabsBg }}
    >
      {/* mask strip so the cut-out corners don't peek below the row */}

      <div className={`relative z-10 flex flex-wrap gap-6`}>
        {tabs.map((t) => {
          const active = t.path === activePath;

          return (
            <div
              key={t.path}
              role="tab"
              aria-selected={active}
              onClick={() => onActivate(t.path)}
              className={[
                " relative z-20 flex items-center h-10 px-4 rounded-t-xl cursor-pointer select-none  gap-3 ",
                "!transition-[background-color,border-color,box-shadow,color] !duration-75 ease-out",

                active ? "bg-[#E6F1FA] text-[#1C75BC] " : " text-[#374151] ",
              ].join(" ")}
              style={
                {
                  // one speed for everything in this tab
                  ["--tab-speed" as any]: "120ms",
                } as React.CSSProperties
              }
            >
              <RightSVG
                className={[
                  "pointer-events-none absolute right-[-7px] bottom-[-16px] h-full",
                  // animate opacity + small lift
                  "transition-opacity duration-75 ease-out",
                  active ? "opacity-100" : "opacity-0",
                ].join(" ")}
                style={{
                  transition:
                    "opacity var(--tab-speed) ease-out, transform var(--tab-speed) ease-out",
                  opacity: active ? 1 : 0,
                  transform: active ? "translateY(0)" : "translateY(2px)",
                  willChange: "opacity, transform",
                }}
              />

              <LeftSVG
                className={[
                  "pointer-events-none absolute left-[-7px] bottom-[-16px] h-full",
                  "transition-opacity duration-150 ease-out",
                  active ? "opacity-100" : "opacity-0",
                ].join(" ")}
                style={{
                  transition:
                    "opacity var(--tab-speed) ease-out, transform var(--tab-speed) ease-out",
                  opacity: active ? 1 : 0,
                  transform: active ? "translateY(0)" : "translateY(2px)",
                  willChange: "opacity, transform",
                }}
              />

              <span className={`mr-2 ${active ? "font-[600]" : "font-[600]"}`}>
                {t.label}
              </span>

              {t.closable !== false && (
                <button
                  aria-label={`Close ${t.label}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose(t.path);
                  }}
                  className="opacity-60 hover:opacity-100 -mr-1 p-1 rounded-full transition-opacity !duration-[120ms] ease-out hover:bg-black/5"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
