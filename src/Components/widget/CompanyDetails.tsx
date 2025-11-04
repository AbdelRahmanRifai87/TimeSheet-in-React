// import React, { useState, useEffect } from "react";
// import { useDarkModeStore } from "../../Theme/useDarkModeStore";
// import Breadcrumb from "../BreadCrumb";
// const CompanyDetails: React.FC = () => {
//   const styles = useDarkModeStore((s) => s.styles);

//   const [lightPreview, setLightPreview] = useState<string | null>(null);
//   const [darkPreview, setDarkPreview] = useState<string | null>(null);
//   const [isResizingActive, setIsResizingActive] = useState(false);

//   const [lightSize, setLightSize] = useState({ width: 150, height: 120 });
//   const [darkSize, setDarkSize] = useState({ width: 150, height: 120 });
//   const setCompanyLogo = useDarkModeStore((s) => s.setCompanyLogo);

//   const [resizing, setResizing] = useState<{
//     type: "light" | "dark" | null;
//     direction: "horizontal" | "vertical" | null;
//     side: "left" | "right" | "top" | "bottom" | null;
//   }>({ type: null, direction: null, side: null });

//   // -----------------------------
//   // Handle resizing logic
//   // -----------------------------
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!resizing.type || !resizing.direction || !resizing.side) return;
//       const deltaX = e.movementX;
//       const deltaY = e.movementY;

//       const resizeLogic = (
//         prev: { width: number; height: number },
//         maxWidth: number,
//         maxHeight: number
//       ) => {
//         let newWidth = prev.width;
//         let newHeight = prev.height;

//         if (resizing.direction === "horizontal") {
//           if (resizing.side === "right") {
//             newWidth = Math.min(Math.max(60, prev.width + deltaX), maxWidth);
//           } else if (resizing.side === "left") {
//             newWidth = Math.min(Math.max(60, prev.width - deltaX), maxWidth);
//           }
//         } else if (resizing.direction === "vertical") {
//           if (resizing.side === "bottom") {
//             newHeight = Math.min(Math.max(60, prev.height + deltaY), maxHeight);
//           } else if (resizing.side === "top") {
//             newHeight = Math.min(Math.max(60, prev.height - deltaY), maxHeight);
//           }
//         }

//         return { width: newWidth, height: newHeight };
//       };

//       if (resizing.type === "light") {
//         setLightSize((prev) => resizeLogic(prev, 224, 160));
//       } else if (resizing.type === "dark") {
//         setDarkSize((prev) => resizeLogic(prev, 224, 160));
//       }
//     };

//     const stopResizing = () => {
//       setResizing({ type: null, direction: null, side: null });
//       setTimeout(() => setIsResizingActive(false), 150);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", stopResizing);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", stopResizing);
//     };
//   }, [resizing]);

//   const startResizing = (
//     e: React.MouseEvent,
//     type: "light" | "dark",
//     direction: "horizontal" | "vertical",
//     side: "left" | "right" | "top" | "bottom"
//   ) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsResizingActive(true);
//     setResizing({ type, direction, side });
//   };

//   return (
//     <div className="flex flex-col h-full w-full p-8 text-white">
//       <Breadcrumb />

//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl text-blue-950">Company Details</h2>
//       </div>

//       {/* Two sections */}
//       <div className="flex flex-1 bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-700">
//         {/* LEFT: Light */}
//         <div className="w-1/2 flex flex-col items-center justify-center border-r border-gray-700 p-6">
//           <h3 className="text-xl font-semibold mb-4 text-amber-50">Light</h3>

//           <label className="w-56 h-40 border-2 border-dashed border-gray-500 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors overflow-hidden relative">
//             <input
//               type="file"
//               accept="image/png"
//               className="hidden"
//               disabled={isResizingActive}
//               onChange={(e) => {
//                 const file = e.target.files?.[0];
//                 if (file && file.type === "image/png") {
//                   const previewURL = URL.createObjectURL(file);
//                   setLightPreview(previewURL);
//                 } else {
//                   alert("Please upload a PNG image.");
//                 }
//               }}
//             />

//             {lightPreview ? (
//               <div
//                 className="relative border border-gray-600"
//                 style={{ display: "inline-block", overflow: "hidden" }}
//               >
//                 <img
//                   src={lightPreview}
//                   alt="Light preview"
//                   style={{
//                     width: `${lightSize.width}px`,
//                     height: `${lightSize.height}px`,
//                     objectFit: "fill",
//                     userSelect: "none",
//                     maxWidth: "224px",
//                     maxHeight: "160px",
//                   }}
//                   draggable={false}
//                 />

//                 {/* Resize handles */}
//                 {["right", "left"].map((side) => (
//                   <div
//                     key={`light-h-${side}`}
//                     className={`absolute top-0 ${side}-0 h-full w-2 cursor-ew-resize bg-transparent hover:bg-blue-400/30`}
//                     onMouseDown={(e) =>
//                       startResizing(e, "light", "horizontal", side as any)
//                     }
//                   />
//                 ))}
//                 {["top", "bottom"].map((side) => (
//                   <div
//                     key={`light-v-${side}`}
//                     className={`absolute ${side}-0 left-0 w-full h-2 cursor-ns-resize bg-transparent hover:bg-blue-400/30`}
//                     onMouseDown={(e) =>
//                       startResizing(e, "light", "vertical", side as any)
//                     }
//                   />
//                 ))}
//               </div>
//             ) : (
//               <span className="text-sm opacity-70 text-center px-2 text-amber-50">
//                 Click to upload PNG for Light mode
//               </span>
//             )}
//           </label>
//         </div>

//         {/* RIGHT: Dark */}
//         <div className="w-1/2 flex flex-col items-center justify-center p-6">
//           <h3 className="text-xl font-semibold mb-4 text-amber-50">Dark</h3>

//           <label className="w-56 h-40 border-2 border-dashed border-gray-500 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors overflow-hidden relative">
//             <input
//               type="file"
//               accept="image/png"
//               className="hidden"
//               disabled={isResizingActive}
//               onChange={(e) => {
//                 const file = e.target.files?.[0];
//                 if (file && file.type === "image/png") {
//                   const previewURL = URL.createObjectURL(file);
//                   setDarkPreview(previewURL);
//                 } else {
//                   alert("Please upload a PNG image.");
//                 }
//               }}
//             />

//             {darkPreview ? (
//               <div
//                 className="relative border border-gray-600"
//                 style={{ display: "inline-block", overflow: "hidden" }}
//               >
//                 <img
//                   src={darkPreview}
//                   alt="Dark preview"
//                   style={{
//                     width: `${darkSize.width}px`,
//                     height: `${darkSize.height}px`,
//                     objectFit: "fill",
//                     userSelect: "none",
//                     maxWidth: "224px",
//                     maxHeight: "160px",
//                   }}
//                   draggable={false}
//                 />

//                 {/* Resize handles */}
//                 {["right", "left"].map((side) => (
//                   <div
//                     key={`dark-h-${side}`}
//                     className={`absolute top-0 ${side}-0 h-full w-2 cursor-ew-resize bg-transparent hover:bg-blue-400/30`}
//                     onMouseDown={(e) =>
//                       startResizing(e, "dark", "horizontal", side as any)
//                     }
//                   />
//                 ))}
//                 {["top", "bottom"].map((side) => (
//                   <div
//                     key={`dark-v-${side}`}
//                     className={`absolute ${side}-0 left-0 w-full h-2 cursor-ns-resize bg-transparent hover:bg-blue-400/30`}
//                     onMouseDown={(e) =>
//                       startResizing(e, "dark", "vertical", side as any)
//                     }
//                   />
//                 ))}
//               </div>
//             ) : (
//               <span className="text-sm opacity-70 text-center px-2 text-amber-50">
//                 Click to upload PNG for Dark mode
//               </span>
//             )}
//           </label>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="mt-6 flex justify-end">
//         <button
//           onClick={() => {
//             setCompanyLogo(
//               "SECURECY",
//               lightPreview ?? undefined,
//               darkPreview ?? undefined
//             );
//           }}
//           className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//         >
//           Save Logos
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CompanyDetails;
