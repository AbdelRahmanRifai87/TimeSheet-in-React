// // // import React, { useState } from "react";
// // // import { useDarkModeStore } from "./useDarkModeStore";

// // // interface CustomThemePopupProps {
// // //   isOpen: boolean;
// // //   onClose: () => void;
// // // }

// // // const CustomThemePopup: React.FC<CustomThemePopupProps> = ({
// // //   isOpen,
// // //   onClose,
// // // }) => {
// // //   const { customTheme, setCustomTheme } = useDarkModeStore();

// // //   const [localTheme, setLocalTheme] = useState(customTheme);

// // //   if (!isOpen) return null;

// // //   const handleChange = (
// // //     section: keyof typeof customTheme,
// // //     key: string,
// // //     value: string
// // //   ) => {
// // //     setLocalTheme((prev) => ({
// // //       ...prev,
// // //       [section]: { ...prev[section], [key]: value },
// // //     }));
// // //   };

// // //   const handleSave = () => {
// // //     setCustomTheme(localTheme);
// // //     onClose();
// // //   };

// // //   return (
// // //     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
// // //       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[500px] max-h-[90vh] overflow-y-auto">
// // //         <h2 className="text-xl font-bold mb-4 text-center">
// // //           🎨 Customize Your Theme
// // //         </h2>

// // //         <div className="space-y-4">
// // //           {["topbar", "sidebar", "main"].map((section) => (
// // //             <div key={section} className="border p-3 rounded-lg">
// // //               <h3 className="font-semibold capitalize mb-2">
// // //                 {section} Colors
// // //               </h3>
// // //               <div className="grid grid-cols-2 gap-3">
// // //                 <label className="flex items-center gap-2">
// // //                   <span>Background:</span>
// // //                   <input
// // //                     type="color"
// // //                     value={
// // //                       localTheme[section as keyof typeof customTheme].background
// // //                     }
// // //                     onChange={(e) =>
// // //                       handleChange(
// // //                         section as keyof typeof customTheme,
// // //                         "background",
// // //                         e.target.value
// // //                       )
// // //                     }
// // //                   />
// // //                 </label>
// // //                 <label className="flex items-center gap-2">
// // //                   <span>Text:</span>
// // //                   <input
// // //                     type="color"
// // //                     value={localTheme[section as keyof typeof customTheme].text}
// // //                     onChange={(e) =>
// // //                       handleChange(
// // //                         section as keyof typeof customTheme,
// // //                         "text",
// // //                         e.target.value
// // //                       )
// // //                     }
// // //                   />
// // //                 </label>
// // //                 <label className="flex items-center gap-2">
// // //                   <span>Button:</span>
// // //                   <input
// // //                     type="color"
// // //                     value={
// // //                       localTheme[section as keyof typeof customTheme].button
// // //                     }
// // //                     onChange={(e) =>
// // //                       handleChange(
// // //                         section as keyof typeof customTheme,
// // //                         "button",
// // //                         e.target.value
// // //                       )
// // //                     }
// // //                   />
// // //                 </label>
// // //               </div>
// // //             </div>
// // //           ))}

// // //           <div className="border p-3 rounded-lg">
// // //             <h3 className="font-semibold mb-2">Whole Dashboard Background</h3>
// // //             <input
// // //               title="Global Background Color"
// // //               type="color"
// // //               value={localTheme.globalBackground}
// // //               onChange={(e) =>
// // //                 handleChange("globalBackground" as any, "", e.target.value)
// // //               }
// // //             />
// // //           </div>
// // //         </div>

// // //         <div className="mt-6 flex justify-end gap-3">
// // //           <button
// // //             onClick={onClose}
// // //             className="px-4 py-2 rounded bg-gray-400 text-white hover:bg-gray-500"
// // //           >
// // //             Cancel
// // //           </button>
// // //           <button
// // //             onClick={handleSave}
// // //             className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
// // //           >
// // //             Save
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CustomThemePopup;
// // import React, { useEffect, useState } from "react";
// // import { useDarkModeStore } from "./useDarkModeStore";
// // // ----- Types (should match your store) -----
// // type SectionTheme = {
// //   background: string;
// //   text: string;
// //   button: string;
// // };

// // type CustomTheme = {
// //   sidebar: SectionTheme;
// //   topbar: SectionTheme;
// //   main: SectionTheme;
// //   globalBackground?: string;
// // };

// // interface CustomThemePopupProps {
// //   isOpen: boolean;
// //   onClose: () => void;
// // }

// // const defaultSection = {
// //   background: "#ffffff",
// //   text: "#000000",
// //   button: "#4a90e2",
// // };

// // const defaultCustomTheme: CustomTheme = {
// //   sidebar: { ...defaultSection, background: "#1e1e1e", text: "#ffffff" },
// //   topbar: { ...defaultSection, background: "#235e8b", text: "#ffffff" },
// //   main: { ...defaultSection, background: "#ffffff", text: "#000000" },
// //   globalBackground: "#f5f5f5",
// // };

// // const CustomThemePopup: React.FC<CustomThemePopupProps> = ({
// //   isOpen,
// //   onClose,
// // }) => {
// //   const { customTheme, setCustomTheme } = useDarkModeStore();

// //   // Initialize localTheme with store's customTheme (fallback to defaults)
// //   const [localTheme, setLocalTheme] = useState<CustomTheme>(
// //     customTheme ?? defaultCustomTheme
// //   );

// //   // When the store's customTheme changes (e.g. user switched accounts or restored), sync
// //   useEffect(() => {
// //     setLocalTheme(customTheme ?? defaultCustomTheme);
// //   }, [customTheme]);

// //   if (!isOpen) return null;

// //   // Helper types
// //   type SectionKey = "sidebar" | "topbar" | "main";

// //   const handleSectionChange = (
// //     section: SectionKey,
// //     key: keyof SectionTheme,
// //     value: string
// //   ) => {
// //     setLocalTheme((prev) => ({
// //       ...prev,
// //       [section]: {
// //         // prev[section] is known to be SectionTheme because of the SectionKey type
// //         ...(prev[section] as SectionTheme),
// //         [key]: value,
// //       },
// //     }));
// //   };

// //   const handleGlobalBackgroundChange = (value: string) => {
// //     setLocalTheme((prev) => ({
// //       ...prev,
// //       globalBackground: value,
// //     }));
// //   };

// //   const handleSave = () => {
// //     // Persist to store. store accepts Partial<CustomTheme> as well, but we pass full object
// //     setCustomTheme(localTheme);
// //     onClose();
// //   };

// //   const handleReset = () => {
// //     setLocalTheme(defaultCustomTheme);
// //   };

// //   return (
// //     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
// //       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[520px] max-h-[90vh] overflow-y-auto">
// //         <h2 className="text-xl font-bold mb-4 text-center">
// //           🎨 Customize Your Theme
// //         </h2>

// //         <div className="space-y-4">
// //           {(["topbar", "sidebar", "main"] as SectionKey[]).map((section) => {
// //             const s = localTheme[section];
// //             return (
// //               <div key={section} className="border p-3 rounded-lg">
// //                 <h3 className="font-semibold capitalize mb-2">
// //                   {section} Colors
// //                 </h3>
// //                 <div className="grid grid-cols-2 gap-3 items-center">
// //                   <label className="flex items-center gap-2">
// //                     <span className="w-24">Background:</span>
// //                     <input
// //                       type="color"
// //                       value={s.background}
// //                       onChange={(e) =>
// //                         handleSectionChange(
// //                           section,
// //                           "background",
// //                           e.target.value
// //                         )
// //                       }
// //                     />
// //                     <input
// //                       className="ml-2 p-1 text-xs w-full"
// //                       value={s.background}
// //                       onChange={(e) =>
// //                         handleSectionChange(
// //                           section,
// //                           "background",
// //                           e.target.value
// //                         )
// //                       }
// //                     />
// //                   </label>

// //                   <label className="flex items-center gap-2">
// //                     <span className="w-24">Text:</span>
// //                     <input
// //                       type="color"
// //                       value={s.text}
// //                       onChange={(e) =>
// //                         handleSectionChange(section, "text", e.target.value)
// //                       }
// //                     />
// //                     <input
// //                       className="ml-2 p-1 text-xs w-full"
// //                       value={s.text}
// //                       onChange={(e) =>
// //                         handleSectionChange(section, "text", e.target.value)
// //                       }
// //                     />
// //                   </label>

// //                   <label className="flex items-center gap-2 col-span-2">
// //                     <span className="w-24">Button:</span>
// //                     <input
// //                       type="color"
// //                       value={s.button}
// //                       onChange={(e) =>
// //                         handleSectionChange(section, "button", e.target.value)
// //                       }
// //                     />
// //                     <input
// //                       className="ml-2 p-1 text-xs w-full"
// //                       value={s.button}
// //                       onChange={(e) =>
// //                         handleSectionChange(section, "button", e.target.value)
// //                       }
// //                     />
// //                   </label>
// //                 </div>
// //               </div>
// //             );
// //           })}

// //           <div className="border p-3 rounded-lg">
// //             <h3 className="font-semibold mb-2">Whole Dashboard Background</h3>
// //             <div className="flex items-center gap-3">
// //               <input
// //                 title="Global Background Color"
// //                 type="color"
// //                 value={localTheme.globalBackground ?? "#ffffff"}
// //                 onChange={(e) => handleGlobalBackgroundChange(e.target.value)}
// //               />
// //               <input
// //                 className="p-1 text-xs w-full"
// //                 value={localTheme.globalBackground ?? ""}
// //                 onChange={(e) => handleGlobalBackgroundChange(e.target.value)}
// //                 placeholder="#ffffff"
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         <div className="mt-6 flex justify-between items-center">
// //           <div>
// //             <button
// //               onClick={handleReset}
// //               className="px-3 py-2 rounded bg-gray-300 text-black hover:bg-gray-400"
// //             >
// //               Reset to Defaults
// //             </button>
// //           </div>

// //           <div className="flex gap-3">
// //             <button
// //               onClick={onClose}
// //               className="px-4 py-2 rounded bg-gray-400 text-white hover:bg-gray-500"
// //             >
// //               Cancel
// //             </button>
// //             <button
// //               onClick={handleSave}
// //               className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
// //             >
// //               Save
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CustomThemePopup;
// import React, { useEffect, useState } from "react";
// import { useDarkModeStore } from "./useDarkModeStore";

// type SectionTheme = {
//   background: string;
//   text: string;
//   button: string;
// };

// type CustomTheme = {
//   sidebar: SectionTheme;
//   topbar: SectionTheme;
//   main: SectionTheme;
//   globalBackground?: string;
// };

// interface CustomThemePopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const defaultSection = {
//   background: "#ffffff",
//   text: "#000000",
//   button: "#4a90e2",
// };

// const defaultCustomTheme: CustomTheme = {
//   sidebar: { ...defaultSection, background: "#1e1e1e", text: "#ffffff" },
//   topbar: { ...defaultSection, background: "#235e8b", text: "#ffffff" },
//   main: { ...defaultSection, background: "#ffffff", text: "#000000" },
//   globalBackground: "#f5f5f5",
// };

// const CustomThemePopup: React.FC<CustomThemePopupProps> = ({
//   isOpen,
//   onClose,
// }) => {
//   const { customTheme, setCustomTheme } = useDarkModeStore();

//   const [localTheme, setLocalTheme] = useState<CustomTheme>(
//     customTheme ?? defaultCustomTheme
//   );

//   useEffect(() => {
//     setLocalTheme(customTheme ?? defaultCustomTheme);
//   }, [customTheme]);

//   if (!isOpen) return null;

//   type SectionKey = "sidebar" | "topbar" | "main";

//   const handleSectionChange = (
//     section: SectionKey,
//     key: keyof SectionTheme,
//     value: string
//   ) => {
//     setLocalTheme((prev) => ({
//       ...prev,
//       [section]: {
//         ...(prev[section] as SectionTheme),
//         [key]: value,
//       },
//     }));
//   };

//   const handleGlobalBackgroundChange = (value: string) => {
//     setLocalTheme((prev) => ({
//       ...prev,
//       globalBackground: value,
//     }));
//   };

//   const handleSave = () => {
//     setCustomTheme(localTheme);
//     onClose();
//   };

//   const handleReset = () => {
//     setLocalTheme(defaultCustomTheme);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[520px] max-h-[90vh] overflow-y-auto">
//         <h2 className="text-xl font-bold mb-4 text-center">
//           🎨 Customize Your Theme
//         </h2>

//         <div className="space-y-4">
//           {(["topbar", "sidebar", "main"] as SectionKey[]).map((section) => {
//             const s = localTheme[section];
//             return (
//               <div key={section} className="border p-3 rounded-lg">
//                 <h3 className="font-semibold capitalize mb-2">
//                   {section} Colors
//                 </h3>
//                 <div className="grid grid-cols-2 gap-3 items-center">
//                   <label className="flex items-center gap-2">
//                     <span className="w-24">Background:</span>

//                     {/* ✅ For MAIN section, use global background functionality instead */}
//                     {section === "main" ? (
//                       <>
//                         <input
//                           type="color"
//                           value={localTheme.globalBackground ?? "#ffffff"}
//                           onChange={(e) =>
//                             handleGlobalBackgroundChange(e.target.value)
//                           }
//                         />
//                         <input
//                           className="ml-2 p-1 text-xs w-full"
//                           value={localTheme.globalBackground ?? ""}
//                           onChange={(e) =>
//                             handleGlobalBackgroundChange(e.target.value)
//                           }
//                           placeholder="#ffffff"
//                         />
//                       </>
//                     ) : (
//                       <>
//                         <input
//                           type="color"
//                           value={s.background}
//                           onChange={(e) =>
//                             handleSectionChange(
//                               section,
//                               "background",
//                               e.target.value
//                             )
//                           }
//                         />
//                         <input
//                           className="ml-2 p-1 text-xs w-full"
//                           value={s.background}
//                           onChange={(e) =>
//                             handleSectionChange(
//                               section,
//                               "background",
//                               e.target.value
//                             )
//                           }
//                         />
//                       </>
//                     )}
//                   </label>

//                   <label className="flex items-center gap-2">
//                     <span className="w-24">Text:</span>
//                     <input
//                       type="color"
//                       value={s.text}
//                       onChange={(e) =>
//                         handleSectionChange(section, "text", e.target.value)
//                       }
//                     />
//                     <input
//                       className="ml-2 p-1 text-xs w-full"
//                       value={s.text}
//                       onChange={(e) =>
//                         handleSectionChange(section, "text", e.target.value)
//                       }
//                     />
//                   </label>

//                   <label className="flex items-center gap-2 col-span-2">
//                     <span className="w-24">Button:</span>
//                     <input
//                       type="color"
//                       value={s.button}
//                       onChange={(e) =>
//                         handleSectionChange(section, "button", e.target.value)
//                       }
//                     />
//                     <input
//                       className="ml-2 p-1 text-xs w-full"
//                       value={s.button}
//                       onChange={(e) =>
//                         handleSectionChange(section, "button", e.target.value)
//                       }
//                     />
//                   </label>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-6 flex justify-between items-center">
//           <div>
//             <button
//               onClick={handleReset}
//               className="px-3 py-2 rounded bg-gray-300 text-black hover:bg-gray-400"
//             >
//               Reset to Defaults
//             </button>
//           </div>

//           <div className="flex gap-3">
//             <button
//               onClick={onClose}
//               className="px-4 py-2 rounded bg-gray-400 text-white hover:bg-gray-500"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSave}
//               className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomThemePopup;
// // import React, { useState } from "react";
// // import { useDarkModeStore } from "./useDarkModeStore";

// // interface CustomThemePopupProps {
// //   isOpen: boolean;
// //   onClose: () => void;
// // }

// // const CustomThemePopup: React.FC<CustomThemePopupProps> = ({
// //   isOpen,
// //   onClose,
// // }) => {
// //   const { customTheme, setCustomTheme } = useDarkModeStore();

// //   const [localTheme, setLocalTheme] = useState(customTheme);

// //   if (!isOpen) return null;

// //   const handleChange = (
// //     section: keyof typeof customTheme,
// //     key: string,
// //     value: string
// //   ) => {
// //     setLocalTheme((prev) => ({
// //       ...prev,
// //       [section]: { ...prev[section], [key]: value },
// //     }));
// //   };

// //   const handleSave = () => {
// //     setCustomTheme(localTheme);
// //     onClose();
// //   };

// //   return (
// //     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
// //       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[500px] max-h-[90vh] overflow-y-auto">
// //         <h2 className="text-xl font-bold mb-4 text-center">
// //           🎨 Customize Your Theme
// //         </h2>

// //         <div className="space-y-4">
// //           {["topbar", "sidebar", "main"].map((section) => (
// //             <div key={section} className="border p-3 rounded-lg">
// //               <h3 className="font-semibold capitalize mb-2">
// //                 {section} Colors
// //               </h3>
// //               <div className="grid grid-cols-2 gap-3">
// //                 <label className="flex items-center gap-2">
// //                   <span>Background:</span>
// //                   <input
// //                     type="color"
// //                     value={
// //                       localTheme[section as keyof typeof customTheme].background
// //                     }
// //                     onChange={(e) =>
// //                       handleChange(
// //                         section as keyof typeof customTheme,
// //                         "background",
// //                         e.target.value
// //                       )
// //                     }
// //                   />
// //                 </label>
// //                 <label className="flex items-center gap-2">
// //                   <span>Text:</span>
// //                   <input
// //                     type="color"
// //                     value={localTheme[section as keyof typeof customTheme].text}
// //                     onChange={(e) =>
// //                       handleChange(
// //                         section as keyof typeof customTheme,
// //                         "text",
// //                         e.target.value
// //                       )
// //                     }
// //                   />
// //                 </label>
// //                 <label className="flex items-center gap-2">
// //                   <span>Button:</span>
// //                   <input
// //                     type="color"
// //                     value={
// //                       localTheme[section as keyof typeof customTheme].button
// //                     }
// //                     onChange={(e) =>
// //                       handleChange(
// //                         section as keyof typeof customTheme,
// //                         "button",
// //                         e.target.value
// //                       )
// //                     }
// //                   />
// //                 </label>
// //               </div>
// //             </div>
// //           ))}

// //           <div className="border p-3 rounded-lg">
// //             <h3 className="font-semibold mb-2">Whole Dashboard Background</h3>
// //             <input
// //               title="Global Background Color"
// //               type="color"
// //               value={localTheme.globalBackground}
// //               onChange={(e) =>
// //                 handleChange("globalBackground" as any, "", e.target.value)
// //               }
// //             />
// //           </div>
// //         </div>

// //         <div className="mt-6 flex justify-end gap-3">
// //           <button
// //             onClick={onClose}
// //             className="px-4 py-2 rounded bg-gray-400 text-white hover:bg-gray-500"
// //           >
// //             Cancel
// //           </button>
// //           <button
// //             onClick={handleSave}
// //             className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
// //           >
// //             Save
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CustomThemePopup;
// import React, { useEffect, useState } from "react";
// import { useDarkModeStore } from "./useDarkModeStore";
// // ----- Types (should match your store) -----
// type SectionTheme = {
//   background: string;
//   text: string;
//   button: string;
// };

// type CustomTheme = {
//   sidebar: SectionTheme;
//   topbar: SectionTheme;
//   main: SectionTheme;
//   globalBackground?: string;
// };

// interface CustomThemePopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const defaultSection = {
//   background: "#ffffff",
//   text: "#000000",
//   button: "#4a90e2",
// };

// const defaultCustomTheme: CustomTheme = {
//   sidebar: { ...defaultSection, background: "#1e1e1e", text: "#ffffff" },
//   topbar: { ...defaultSection, background: "#235e8b", text: "#ffffff" },
//   main: { ...defaultSection, background: "#ffffff", text: "#000000" },
//   globalBackground: "#f5f5f5",
// };

// const CustomThemePopup: React.FC<CustomThemePopupProps> = ({
//   isOpen,
//   onClose,
// }) => {
//   const { customTheme, setCustomTheme } = useDarkModeStore();

//   // Initialize localTheme with store's customTheme (fallback to defaults)
//   const [localTheme, setLocalTheme] = useState<CustomTheme>(
//     customTheme ?? defaultCustomTheme
//   );

//   // When the store's customTheme changes (e.g. user switched accounts or restored), sync
//   useEffect(() => {
//     setLocalTheme(customTheme ?? defaultCustomTheme);
//   }, [customTheme]);

//   if (!isOpen) return null;

//   // Helper types
//   type SectionKey = "sidebar" | "topbar" | "main";

//   const handleSectionChange = (
//     section: SectionKey,
//     key: keyof SectionTheme,
//     value: string
//   ) => {
//     setLocalTheme((prev) => ({
//       ...prev,
//       [section]: {
//         // prev[section] is known to be SectionTheme because of the SectionKey type
//         ...(prev[section] as SectionTheme),
//         [key]: value,
//       },
//     }));
//   };

//   const handleGlobalBackgroundChange = (value: string) => {
//     setLocalTheme((prev) => ({
//       ...prev,
//       globalBackground: value,
//     }));
//   };

//   const handleSave = () => {
//     // Persist to store. store accepts Partial<CustomTheme> as well, but we pass full object
//     setCustomTheme(localTheme);
//     onClose();
//   };

//   const handleReset = () => {
//     setLocalTheme(defaultCustomTheme);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[520px] max-h-[90vh] overflow-y-auto">
//         <h2 className="text-xl font-bold mb-4 text-center">
//           🎨 Customize Your Theme
//         </h2>

//         <div className="space-y-4">
//           {(["topbar", "sidebar", "main"] as SectionKey[]).map((section) => {
//             const s = localTheme[section];
//             return (
//               <div key={section} className="border p-3 rounded-lg">
//                 <h3 className="font-semibold capitalize mb-2">
//                   {section} Colors
//                 </h3>
//                 <div className="grid grid-cols-2 gap-3 items-center">
//                   <label className="flex items-center gap-2">
//                     <span className="w-24">Background:</span>
//                     <input
//                       type="color"
//                       value={s.background}
//                       onChange={(e) =>
//                         handleSectionChange(
//                           section,
//                           "background",
//                           e.target.value
//                         )
//                       }
//                     />
//                     <input
//                       className="ml-2 p-1 text-xs w-full"
//                       value={s.background}
//                       onChange={(e) =>
//                         handleSectionChange(
//                           section,
//                           "background",
//                           e.target.value
//                         )
//                       }
//                     />
//                   </label>

//                   <label className="flex items-center gap-2">
//                     <span className="w-24">Text:</span>
//                     <input
//                       type="color"
//                       value={s.text}
//                       onChange={(e) =>
//                         handleSectionChange(section, "text", e.target.value)
//                       }
//                     />
//                     <input
//                       className="ml-2 p-1 text-xs w-full"
//                       value={s.text}
//                       onChange={(e) =>
//                         handleSectionChange(section, "text", e.target.value)
//                       }
//                     />
//                   </label>

//                   <label className="flex items-center gap-2 col-span-2">
//                     <span className="w-24">Button:</span>
//                     <input
//                       type="color"
//                       value={s.button}
//                       onChange={(e) =>
//                         handleSectionChange(section, "button", e.target.value)
//                       }
//                     />
//                     <input
//                       className="ml-2 p-1 text-xs w-full"
//                       value={s.button}
//                       onChange={(e) =>
//                         handleSectionChange(section, "button", e.target.value)
//                       }
//                     />
//                   </label>
//                 </div>
//               </div>
//             );
//           })}

//           <div className="border p-3 rounded-lg">
//             <h3 className="font-semibold mb-2">Whole Dashboard Background</h3>
//             <div className="flex items-center gap-3">
//               <input
//                 title="Global Background Color"
//                 type="color"
//                 value={localTheme.globalBackground ?? "#ffffff"}
//                 onChange={(e) => handleGlobalBackgroundChange(e.target.value)}
//               />
//               <input
//                 className="p-1 text-xs w-full"
//                 value={localTheme.globalBackground ?? ""}
//                 onChange={(e) => handleGlobalBackgroundChange(e.target.value)}
//                 placeholder="#ffffff"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mt-6 flex justify-between items-center">
//           <div>
//             <button
//               onClick={handleReset}
//               className="px-3 py-2 rounded bg-gray-300 text-black hover:bg-gray-400"
//             >
//               Reset to Defaults
//             </button>
//           </div>

//           <div className="flex gap-3">
//             <button
//               onClick={onClose}
//               className="px-4 py-2 rounded bg-gray-400 text-white hover:bg-gray-500"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSave}
//               className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomThemePopup;
// import React, { useEffect, useState } from "react";
// import { useDarkModeStore } from "./useDarkModeStore";

// type SectionTheme = {
//   background: string;
//   text: string;
//   button: string;
// };

// type CustomTheme = {
//   sidebar: SectionTheme;
//   topbar: SectionTheme;
//   main: SectionTheme;
//   globalBackground?: string;
// };

// interface CustomThemePopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const defaultSection = {
//   background: "#ffffff",
//   text: "#000000",
//   button: "#4a90e2",
// };

// const defaultCustomTheme: CustomTheme = {
//   sidebar: { ...defaultSection, background: "#1e1e1e", text: "#ffffff" },
//   topbar: { ...defaultSection, background: "#235e8b", text: "#ffffff" },
//   main: { ...defaultSection, background: "#ffffff", text: "#000000" },
//   globalBackground: "#f5f5f5",
// };

// const CustomThemePopup: React.FC<CustomThemePopupProps> = ({
//   isOpen,
//   onClose,
// }) => {
//   const { customTheme, setCustomTheme } = useDarkModeStore();

//   const [localTheme, setLocalTheme] = useState<CustomTheme>(
//     customTheme ?? defaultCustomTheme
//   );

//   useEffect(() => {
//     setLocalTheme(customTheme ?? defaultCustomTheme);
//   }, [customTheme]);

//   if (!isOpen) return null;

//   type SectionKey = "sidebar" | "topbar" | "main";

//   const handleSectionChange = (
//     section: SectionKey,
//     key: keyof SectionTheme,
//     value: string
//   ) => {
//     setLocalTheme((prev) => ({
//       ...prev,
//       [section]: {
//         ...(prev[section] as SectionTheme),
//         [key]: value,
//       },
//     }));
//   };

//   const handleGlobalBackgroundChange = (value: string) => {
//     setLocalTheme((prev) => ({
//       ...prev,
//       globalBackground: value,
//     }));
//   };

//   const handleSave = () => {
//     setCustomTheme(localTheme);
//     onClose();
//   };

//   const handleReset = () => {
//     setLocalTheme(defaultCustomTheme);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[520px] max-h-[90vh] overflow-y-auto">
//         <h2 className="text-xl font-bold mb-4 text-center">
//           🎨 Customize Your Theme
//         </h2>

//         <div className="space-y-4">
//           {(["topbar", "sidebar", "main"] as SectionKey[]).map((section) => {
//             const s = localTheme[section];
//             return (
//               <div key={section} className="border p-3 rounded-lg">
//                 <h3 className="font-semibold capitalize mb-2">
//                   {section} Colors
//                 </h3>
//                 <div className="grid grid-cols-2 gap-3 items-center">
//                   <label className="flex items-center gap-2">
//                     <span className="w-24">Background:</span>

//                     {/* ✅ For MAIN section, use global background functionality instead */}
//                     {section === "main" ? (
//                       <>
//                         <input
//                           type="color"
//                           value={localTheme.globalBackground ?? "#ffffff"}
//                           onChange={(e) =>
//                             handleGlobalBackgroundChange(e.target.value)
//                           }
//                         />
//                         <input
//                           className="ml-2 p-1 text-xs w-full"
//                           value={localTheme.globalBackground ?? ""}
//                           onChange={(e) =>
//                             handleGlobalBackgroundChange(e.target.value)
//                           }
//                           placeholder="#ffffff"
//                         />
//                       </>
//                     ) : (
//                       <>
//                         <input
//                           type="color"
//                           value={s.background}
//                           onChange={(e) =>
//                             handleSectionChange(
//                               section,
//                               "background",
//                               e.target.value
//                             )
//                           }
//                         />
//                         <input
//                           className="ml-2 p-1 text-xs w-full"
//                           value={s.background}
//                           onChange={(e) =>
//                             handleSectionChange(
//                               section,
//                               "background",
//                               e.target.value
//                             )
//                           }
//                         />
//                       </>
//                     )}
//                   </label>

//                   <label className="flex items-center gap-2">
//                     <span className="w-24">Text:</span>
//                     <input
//                       type="color"
//                       value={s.text}
//                       onChange={(e) =>
//                         handleSectionChange(section, "text", e.target.value)
//                       }
//                     />
//                     <input
//                       className="ml-2 p-1 text-xs w-full"
//                       value={s.text}
//                       onChange={(e) =>
//                         handleSectionChange(section, "text", e.target.value)
//                       }
//                     />
//                   </label>

//                   <label className="flex items-center gap-2 col-span-2">
//                     <span className="w-24">Button:</span>
//                     <input
//                       type="color"
//                       value={s.button}
//                       onChange={(e) =>
//                         handleSectionChange(section, "button", e.target.value)
//                       }
//                     />
//                     <input
//                       className="ml-2 p-1 text-xs w-full"
//                       value={s.button}
//                       onChange={(e) =>
//                         handleSectionChange(section, "button", e.target.value)
//                       }
//                     />
//                   </label>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-6 flex justify-between items-center">
//           <div>
//             <button
//               onClick={handleReset}
//               className="px-3 py-2 rounded bg-gray-300 text-black hover:bg-gray-400"
//             >
//               Reset to Defaults
//             </button>
//           </div>

//           <div className="flex gap-3">
//             <button
//               onClick={onClose}
//               className="px-4 py-2 rounded bg-gray-400 text-white hover:bg-gray-500"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSave}
//               className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomThemePopup;
// import React, { useEffect, useRef, useState } from "react";
// import { useDarkModeStore } from "./useDarkModeStore";
// import Draggable from "react-draggable";

// type SectionTheme = {
//   background: string;
//   text: string;
//   button: string;
// };

// type CustomTheme = {
//   sidebar: SectionTheme;
//   topbar: SectionTheme;
//   main: SectionTheme;
//   globalBackground?: string;
// };

// interface CustomThemePopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const defaultSection = {
//   background: "#ffffff",
//   text: "#000000",
//   button: "#4a90e2",
// };

// const defaultCustomTheme: CustomTheme = {
//   sidebar: { ...defaultSection, background: "#1e1e1e", text: "#ffffff" },
//   topbar: { ...defaultSection, background: "#235e8b", text: "#ffffff" },
//   main: { ...defaultSection, background: "#ffffff", text: "#000000" },
//   globalBackground: "#ffffff",
// };

// const CustomThemePopup: React.FC<CustomThemePopupProps> = ({
//   isOpen,
//   onClose,
// }) => {
//   const { customTheme, setCustomTheme } = useDarkModeStore();
//   const [localTheme, setLocalTheme] = useState<CustomTheme>(
//     customTheme ?? defaultCustomTheme
//   );
//   const nodeRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     setLocalTheme(customTheme ?? defaultCustomTheme);
//   }, [customTheme]);
//   // // ------------------ Draggable State ------------------
//   // const [position, setPosition] = useState({ x: 0, y: 0 });
//   // const [dragging, setDragging] = useState(false);
//   // const [offset, setOffset] = useState({ x: 0, y: 0 });

//   // const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//   //   setDragging(true);
//   //   setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
//   // };

//   // const handleMouseMove = (e: MouseEvent) => {
//   //   if (!dragging) return;
//   //   setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
//   // };

//   // const handleMouseUp = () => {
//   //   setDragging(false);
//   // };

//   // useEffect(() => {
//   //   window.addEventListener("mousemove", handleMouseMove);
//   //   window.addEventListener("mouseup", handleMouseUp);
//   //   return () => {
//   //     window.removeEventListener("mousemove", handleMouseMove);
//   //     window.removeEventListener("mouseup", handleMouseUp);
//   //   };
//   // }, [dragging, offset]);

//   if (!isOpen) return null;

//   type SectionKey = "sidebar" | "topbar" | "main";

//   // ---------- Utility Functions ----------
//   const lightenColor = (hex: string, percent: number) => {
//     const cleanHex = hex.replace("#", "");
//     const hexFull =
//       cleanHex.length === 3
//         ? cleanHex
//             .split("")
//             .map((c) => c + c)
//             .join("")
//         : cleanHex;
//     const num = parseInt(hexFull, 16);
//     let r = (num >> 16) & 0xff;
//     let g = (num >> 8) & 0xff;
//     let b = num & 0xff;
//     r = Math.min(255, Math.floor(r + (255 - r) * percent));
//     g = Math.min(255, Math.floor(g + (255 - g) * percent));
//     b = Math.min(255, Math.floor(b + (255 - b) * percent));
//     return (
//       "#" +
//       [r, g, b]
//         .map((x) => x.toString(16).padStart(2, "0"))
//         .join("")
//         .toUpperCase()
//     );
//   };

//   const darkenColor = (hex: string, percent: number) => {
//     const cleanHex = hex.replace("#", "");
//     const hexFull =
//       cleanHex.length === 3
//         ? cleanHex
//             .split("")
//             .map((c) => c + c)
//             .join("")
//         : cleanHex;
//     const num = parseInt(hexFull, 16);
//     let r = (num >> 16) & 0xff;
//     let g = (num >> 8) & 0xff;
//     let b = num & 0xff;
//     r = Math.max(0, Math.floor(r * (1 - percent)));
//     g = Math.max(0, Math.floor(g * (1 - percent)));
//     b = Math.max(0, Math.floor(b * (1 - percent)));
//     return (
//       "#" +
//       [r, g, b]
//         .map((x) => x.toString(16).padStart(2, "0"))
//         .join("")
//         .toUpperCase()
//     );
//   };

//   // ---------- Section Change ----------
//   const handleSectionChange = (
//     section: SectionKey,
//     key: keyof SectionTheme,
//     value: string
//   ) => {
//     // setLocalTheme((prev) => {
//     //   // Sync text for all sections
//     //   if (key === "text") {
//     //     return {
//     //       ...prev,
//     //       sidebar: { ...prev.sidebar, text: value },
//     //       topbar: { ...prev.topbar, text: value },
//     //       main: { ...prev.main, text: value },
//     //     };
//     //   }
//     //   // Sync sidebar/topbar button & background
//     //   if (section === "sidebar" || section === "topbar") {
//     //     let newBackground = prev.sidebar.background;
//     //     let newButton = prev.sidebar.button;
//     //     if (key === "background") {
//     //       newBackground = value;
//     //       newButton = lightenColor(value, 0.2);
//     //     } else if (key === "button") {
//     //       newButton = value;
//     //       newBackground = darkenColor(value, 0.2);
//     //     }
//     //     return {
//     //       ...prev,
//     //       sidebar: {
//     //         ...prev.sidebar,
//     //         background: newBackground,
//     //         button: newButton,
//     //         text: prev.sidebar.text,
//     //       },
//     //       topbar: {
//     //         ...prev.topbar,
//     //         background: newBackground,
//     //         button: newButton,
//     //         text: prev.topbar.text,
//     //       },
//     //       main: { ...prev.main, button: newButton }, // main button follows sidebar/topbar
//     //     };
//     //   }
//     //   // Main section changes (should rarely happen)
//     //   return {
//     //     ...prev,
//     //     [section]: { ...(prev[section] as SectionTheme), [key]: value },
//     //   };
//     // });
//     setLocalTheme((prev) => {
//       let updatedTheme: CustomTheme;

//       // Sync text for all sections
//       if (key === "text") {
//         updatedTheme = {
//           ...prev,
//           sidebar: { ...prev.sidebar, text: value },
//           topbar: { ...prev.topbar, text: value },
//           main: { ...prev.main, text: value },
//         };
//       }
//       // Sync sidebar/topbar button & background
//       else if (section === "sidebar" || section === "topbar") {
//         let newBackground = prev.sidebar.background;
//         let newButton = prev.sidebar.button;

//         if (key === "background") {
//           newBackground = value;
//           newButton = lightenColor(value, 0.2);
//         } else if (key === "button") {
//           newButton = value;
//           newBackground = darkenColor(value, 0.2);
//         }

//         updatedTheme = {
//           ...prev,
//           sidebar: {
//             ...prev.sidebar,
//             background: newBackground,
//             button: newButton,
//             text: prev.sidebar.text,
//           },
//           topbar: {
//             ...prev.topbar,
//             background: newBackground,
//             button: newButton,
//             text: prev.topbar.text,
//           },
//           main: { ...prev.main, button: newButton },
//         };
//       }
//       // Main section changes
//       else {
//         updatedTheme = {
//           ...prev,
//           [section]: { ...(prev[section] as SectionTheme), [key]: value },
//         };
//       }

//       // 💡 LIVE UPDATE: update the global store too
//       setCustomTheme(updatedTheme);

//       return updatedTheme;
//     });
//   };

//   // ---------- Main Background Buttons ----------
//   // const setMainBackground = (color: "white" | "black") => {
//   //   setLocalTheme((prev) => ({
//   //     ...prev,
//   //     main: {
//   //       ...prev.main,
//   //       background: color === "white" ? "#ffffff" : "#000000",
//   //       button: prev.sidebar.button, // always follows sidebar/topbar
//   //     },
//   //     globalBackground: color === "white" ? "#ffffff" : "#000000",
//   //   }));
//   // };
//   // const setMainBackground = (color: "white" | "dark") => {
//   //   setLocalTheme((prev) => ({
//   //     ...prev,
//   //     main: {
//   //       ...prev.main,
//   //       background: color === "white" ? "#ffffff" : "#1f1f1f", // dark instead of black
//   //     },
//   //     globalBackground: color === "white" ? "#ffffff" : "#1f1f1f", // update global background too
//   //   }));
//   // };
//   const setMainBackground = (color: "white" | "dark") => {
//     const newBg = color === "white" ? "#ffffff" : "#1f1f1f"; // dark instead of black

//     // 1️⃣ Update local popup state
//     setLocalTheme((prev) => ({
//       ...prev,
//       main: {
//         ...prev.main,
//         background: newBg,
//         button: prev.main.button, // keep main button as is
//       },
//       globalBackground: newBg,
//     }));

//     // 2️⃣ Immediately update the store so UI changes
//     setCustomTheme({
//       main: {
//         background: newBg,
//         button: localTheme.main.button, // keep button
//         text: localTheme.main.text, // add this line!
//       },
//       globalBackground: newBg,
//     });
//   };

//   // const handleSave = () => {
//   //   setCustomTheme(localTheme);
//   //   onClose();
//   // };

//   const handleReset = () => {
//     setLocalTheme(defaultCustomTheme);
//     setCustomTheme(defaultCustomTheme); // also reset the store
//   };

//   // ---------- JSX ----------
//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
//       <div className="relative w-full h-full flex items-center justify-center">
//         <Draggable bounds="parent" nodeRef={nodeRef}>
//           <div
//             ref={nodeRef}
//             className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[520px] max-h-[90vh] overflow-y-auto cursor-move"
//           >
//             <h2 className="text-xl font-bold mb-4 text-center">
//               🎨 Customize Your Theme
//             </h2>

//             <div className="space-y-4">
//               {(["topbar", "sidebar"] as SectionKey[]).map((section) => {
//                 const s = localTheme[section];
//                 return (
//                   <div key={section} className="border p-3 rounded-lg">
//                     <h3 className="font-semibold capitalize mb-2">
//                       {section} Colors
//                     </h3>
//                     <div className="grid grid-cols-2 gap-3 items-center">
//                       {/* Background */}
//                       <label className="flex items-center gap-2">
//                         <span className="w-24">Background:</span>
//                         <input
//                           type="color"
//                           value={s.background}
//                           onChange={(e) =>
//                             handleSectionChange(
//                               section,
//                               "background",
//                               e.target.value
//                             )
//                           }
//                         />
//                         <input
//                           className="ml-2 p-1 text-xs w-full"
//                           value={s.background}
//                           onChange={(e) =>
//                             handleSectionChange(
//                               section,
//                               "background",
//                               e.target.value
//                             )
//                           }
//                           placeholder="#ffffff"
//                         />
//                       </label>

//                       {/* Text
//                   <label className="flex items-center gap-2">
//                     <span className="w-24">Text:</span>
//                     <input
//                       type="color"
//                       value={s.text}
//                       onChange={(e) =>
//                         handleSectionChange(section, "text", e.target.value)
//                       }
//                     />
//                     <input
//                       className="ml-2 p-1 text-xs w-full"
//                       value={s.text}
//                       onChange={(e) =>
//                         handleSectionChange(section, "text", e.target.value)
//                       }
//                     />
//                   </label> */}
//                       {/* Text */}
//                       <label className="flex items-center gap-2">
//                         <span className="w-24">Text:</span>
//                         <div className="flex gap-2">
//                           <button
//                             className={`px-3 py-1 rounded border ${
//                               s.text === "#262727" ? "ring-2 ring-blue-500" : ""
//                             }`}
//                             onClick={() =>
//                               handleSectionChange(section, "text", "#262727")
//                             }
//                           >
//                             Dark
//                           </button>
//                           <button
//                             className={`px-3 py-1 rounded border ${
//                               s.text === "#ffffff" ? "ring-2 ring-blue-500" : ""
//                             }`}
//                             onClick={() =>
//                               handleSectionChange(section, "text", "#ffffff")
//                             }
//                           >
//                             White
//                           </button>
//                         </div>
//                       </label>

//                       {/* Button */}
//                       <label className="flex items-center gap-2 col-span-2">
//                         <span className="w-24">Button:</span>
//                         <input
//                           type="color"
//                           value={s.button}
//                           onChange={(e) =>
//                             handleSectionChange(
//                               section,
//                               "button",
//                               e.target.value
//                             )
//                           }
//                         />
//                         <input
//                           className="ml-2 p-1 text-xs w-full"
//                           value={s.button}
//                           onChange={(e) =>
//                             handleSectionChange(
//                               section,
//                               "button",
//                               e.target.value
//                             )
//                           }
//                         />
//                       </label>
//                     </div>
//                   </div>
//                 );
//               })}

//               {/* Main section with only white/black buttons */}
//               {/* <div className="border p-3 rounded-lg">
//             <h3 className="font-semibold capitalize mb-2">Main Content</h3>
//             <div className="flex space-x-2">
//               <button
//                 className={`px-4 py-2 rounded border ${
//                   localTheme.main.background === "#ffffff"
//                     ? "ring-2 ring-blue-500"
//                     : ""
//                 }`}
//                 onClick={() => setMainBackground("white")}
//               >
//                 White
//               </button>
//               <button
//                 className={`px-4 py-2 rounded border ${
//                   localTheme.main.background === "#000000"
//                     ? "ring-2 ring-blue-500 bg-black text-white"
//                     : "bg-black text-white"
//                 }`}
//                 onClick={() => setMainBackground("black")}
//               >
//                 Black
//               </button>
//             </div>
//           </div> */}
//               {/* <div className="flex space-x-2">
//             <button
//               className={`px-4 py-2 rounded border ${
//                 localTheme.main.background === "#ffffff"
//                   ? "ring-2 ring-blue-500"
//                   : ""
//               }`}
//               onClick={() => setMainBackground("white")}
//             >
//               White
//             </button>
//             <button
//               className={`px-4 py-2 rounded border ${
//                 localTheme.main.background === "#1f1f1f"
//                   ? "ring-2 ring-blue-500 bg-gray-800 text-white"
//                   : "bg-gray-800 text-white"
//               }`}
//               onClick={() => setMainBackground("dark")}
//             >
//               Dark
//             </button>
//           </div> */}
//               {/* Main Section */}
//               <div className="border p-3 rounded-lg">
//                 <h3 className="font-semibold capitalize mb-2">Main Content</h3>
//                 <div className="grid grid-cols-2 gap-3 items-center">
//                   {/* Background Buttons */}
//                   <label className="flex items-center gap-2 col-span-2">
//                     <span className="w-24">Background:</span>
//                     <div className="flex gap-2">
//                       <button
//                         className={`px-4 py-2 rounded border ${
//                           localTheme.main.background === "#ffffff"
//                             ? "ring-2 ring-blue-500"
//                             : ""
//                         }`}
//                         onClick={() => setMainBackground("white")}
//                       >
//                         White
//                       </button>
//                       <button
//                         className={`px-4 py-2 rounded border ${
//                           localTheme.main.background === "#1f1f1f"
//                             ? "ring-2 ring-blue-500 bg-gray-800 text-white"
//                             : "bg-gray-800 text-white"
//                         }`}
//                         onClick={() => setMainBackground("dark")}
//                       >
//                         Dark
//                       </button>
//                     </div>
//                   </label>

//                   {/* Text color buttons */}
//                   <label className="flex items-center gap-2 col-span-2">
//                     <span className="w-24">Text:</span>
//                     <div className="flex gap-2">
//                       <button
//                         className={`px-3 py-1 rounded border ${
//                           localTheme.main.text === "#262727"
//                             ? "ring-2 ring-blue-500"
//                             : ""
//                         }`}
//                         onClick={() =>
//                           handleSectionChange("main", "text", "#262727")
//                         }
//                       >
//                         Dark
//                       </button>
//                       <button
//                         className={`px-3 py-1 rounded border ${
//                           localTheme.main.text === "#ffffff"
//                             ? "ring-2 ring-blue-500"
//                             : ""
//                         }`}
//                         onClick={() =>
//                           handleSectionChange("main", "text", "#ffffff")
//                         }
//                       >
//                         White
//                       </button>
//                     </div>
//                   </label>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6 flex justify-between items-center">
//               <div>
//                 <button
//                   onClick={handleReset}
//                   className="px-3 py-2 rounded bg-gray-300 text-black hover:bg-gray-400"
//                 >
//                   Reset to Defaults
//                 </button>
//               </div>

//               <div className="flex gap-3">
//                 <button
//                   onClick={onClose}
//                   className="px-4 py-2 rounded bg-gray-400 text-white hover:bg-gray-500"
//                 >
//                   Cancel
//                 </button>
//                 {/* <button
//               onClick={handleSave}
//               className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
//             >
//               Save
//             </button> */}
//               </div>
//             </div>
//           </div>
//         </Draggable>
//       </div>
//     </div>
//   );
// };

// export default CustomThemePopup;
// import React, { useEffect, useRef, useState } from "react";
// import { useDarkModeStore } from "./useDarkModeStore";
// import Draggable from "react-draggable";
// import { HexColorPicker } from "react-colorful";

// type SectionTheme = {
//   background: string;
//   text: string;
//   button: string;
// };

// type CustomTheme = {
//   sidebar: SectionTheme;
//   topbar: SectionTheme;
//   main: SectionTheme;
//   globalBackground?: string;
// };

// interface CustomThemePopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const defaultSection = {
//   background: "#ffffff",
//   text: "#000000",
//   button: "#4a90e2",
// };

// const defaultCustomTheme: CustomTheme = {
//   sidebar: {
//     ...defaultSection,
//     background: "#235e8b",
//     text: "#ffffff",
//     button: "#EDEDED80",
//   },
//   topbar: {
//     ...defaultSection,
//     background: "#235e8b",
//     text: "#ffffff",
//     button: "rgba(255,255,255,0.1)",
//   },
//   main: { ...defaultSection, background: "#1C75BC26", text: "#000000" },
// };

// const CustomThemePopup: React.FC<CustomThemePopupProps> = ({
//   isOpen,
//   onClose,
// }) => {
//   const { customTheme, setCustomTheme } = useDarkModeStore();
//   const [localTheme, setLocalTheme] = useState<CustomTheme>(
//     customTheme ?? defaultCustomTheme
//   );
//   const nodeRef = useRef<HTMLDivElement>(null);
//   const [originalTheme, setOriginalTheme] = useState<CustomTheme>(
//     customTheme ?? defaultCustomTheme
//   );

//   useEffect(() => {
//     if (isOpen) {
//       setOriginalTheme(customTheme ?? defaultCustomTheme);
//       setLocalTheme(customTheme ?? defaultCustomTheme);

//       // Apply local theme to UI temporarily for preview
//       setCustomTheme(customTheme ?? defaultCustomTheme);
//     }
//   }, [isOpen]);

//   type SectionKey = "sidebar" | "topbar" | "main";

//   // ---------- Utility Functions ----------
//   const lightenColor = (hex: string, percent: number) => {
//     const cleanHex = hex.replace("#", "");
//     const hexFull =
//       cleanHex.length === 3
//         ? cleanHex
//             .split("")
//             .map((c) => c + c)
//             .join("")
//         : cleanHex;
//     const num = parseInt(hexFull, 16);
//     let r = (num >> 16) & 0xff;
//     let g = (num >> 8) & 0xff;
//     let b = num & 0xff;
//     r = Math.min(255, Math.floor(r + (255 - r) * percent));
//     g = Math.min(255, Math.floor(g + (255 - g) * percent));
//     b = Math.min(255, Math.floor(b + (255 - b) * percent));
//     return (
//       "#" +
//       [r, g, b]
//         .map((x) => x.toString(16).padStart(2, "0"))
//         .join("")
//         .toUpperCase()
//     );
//   };

//   const darkenColor = (hex: string, percent: number) => {
//     const cleanHex = hex.replace("#", "");
//     const hexFull =
//       cleanHex.length === 3
//         ? cleanHex
//             .split("")
//             .map((c) => c + c)
//             .join("")
//         : cleanHex;
//     const num = parseInt(hexFull, 16);
//     let r = (num >> 16) & 0xff;
//     let g = (num >> 8) & 0xff;
//     let b = num & 0xff;
//     r = Math.max(0, Math.floor(r * (1 - percent)));
//     g = Math.max(0, Math.floor(g * (1 - percent)));
//     b = Math.max(0, Math.floor(b * (1 - percent)));
//     return (
//       "#" +
//       [r, g, b]
//         .map((x) => x.toString(16).padStart(2, "0"))
//         .join("")
//         .toUpperCase()
//     );
//   };
//   const [isSidebarDarkText, setIsSidebarDarkText] = useState(
//     localTheme.sidebar.text === "#ffffff"
//   );

//   const toggleSidebarText = () => {
//     const newText = isSidebarDarkText ? "#ffffff" : "#262727"; // dark/light text
//     setIsSidebarDarkText(!isSidebarDarkText);

//     // Update local state only for sidebar/topbar text
//     setLocalTheme((prev) => ({
//       ...prev,
//       sidebar: { ...prev.sidebar, text: newText },
//       topbar: { ...prev.topbar, text: newText },
//     }));

//     // Update Zustand store
//     setCustomTheme({
//       ...customTheme,
//       sidebar: { ...customTheme.sidebar, text: newText },
//       topbar: { ...customTheme.topbar, text: newText },
//     });
//   };

//   // const handleSectionChange = (
//   //   section: SectionKey,
//   //   key: keyof SectionTheme,
//   //   value: string
//   // ) => {
//   //   setLocalTheme((prev) => {
//   //     let updatedTheme: CustomTheme;

//   //     // Sync text for all sections
//   //     if (key === "text") {
//   //       updatedTheme = {
//   //         ...prev,
//   //         sidebar: { ...prev.sidebar, text: value },
//   //         topbar: { ...prev.topbar, text: value },
//   //         main: { ...prev.main, text: value },
//   //       };
//   //     }
//   //     // Sync sidebar/topbar button & background
//   //     else if (section === "sidebar" || section === "topbar") {
//   //       let newBackground = prev.sidebar.background;
//   //       let newButton = prev.sidebar.button;

//   //       if (key === "background") {
//   //         newBackground = value;
//   //         newButton = lightenColor(value, 0.2);
//   //       } else if (key === "button") {
//   //         newButton = value;
//   //         newBackground = darkenColor(value, 0.2);
//   //       }

//   //       updatedTheme = {
//   //         ...prev,
//   //         sidebar: {
//   //           ...prev.sidebar,
//   //           background: newBackground,
//   //           button: newButton,
//   //           text: prev.sidebar.text,
//   //         },
//   //         topbar: {
//   //           ...prev.topbar,
//   //           background: newBackground,
//   //           button: newButton,
//   //           text: prev.topbar.text,
//   //         },
//   //         main: { ...prev.main, button: newButton },
//   //       };
//   //     }
//   //     // Main section changes
//   //     else {
//   //       updatedTheme = {
//   //         ...prev,
//   //         [section]: { ...(prev[section] as SectionTheme), [key]: value },
//   //       };
//   //     }

//   //     // 💡 LIVE UPDATE: update the global store too
//   //     setLocalTheme(updatedTheme);

//   //     return updatedTheme;
//   //   });
//   // };
//   // const handleSectionChange = (
//   //   section: SectionKey,
//   //   key: keyof SectionTheme,
//   //   value: string
//   // ) => {
//   //   setLocalTheme((prev) => {
//   //     let updatedTheme: CustomTheme;

//   //     if (key === "text") {
//   //       updatedTheme = {
//   //         ...prev,
//   //         sidebar: { ...prev.sidebar, text: value },
//   //         topbar: { ...prev.topbar, text: value },
//   //         main: { ...prev.main, text: value },
//   //       };
//   //     } else if (section === "sidebar" || section === "topbar") {
//   //       let newBackground = prev.sidebar.background;
//   //       let newButton = prev.sidebar.button;

//   //       if (key === "background") {
//   //         newBackground = value;
//   //         newButton = lightenColor(value, 0.2);
//   //       } else if (key === "button") {
//   //         newButton = value;
//   //         newBackground = darkenColor(value, 0.2);
//   //       }

//   //       updatedTheme = {
//   //         ...prev,
//   //         sidebar: {
//   //           ...prev.sidebar,
//   //           background: newBackground,
//   //           button: newButton,
//   //           text: prev.sidebar.text,
//   //         },
//   //         topbar: {
//   //           ...prev.topbar,
//   //           background: newBackground,
//   //           button: newButton,
//   //           text: prev.topbar.text,
//   //         },
//   //         main: { ...prev.main, button: newButton },
//   //       };
//   //     } else {
//   //       updatedTheme = {
//   //         ...prev,
//   //         [section]: { ...(prev[section] as SectionTheme), [key]: value },
//   //       };
//   //     }

//   //     // ✅ Only update local state
//   //     return updatedTheme;
//   //   });
//   // };
//   const handleSectionChange = (
//     section: SectionKey,
//     key: keyof SectionTheme,
//     value: string
//   ) => {
//     setLocalTheme((prev) => {
//       let updatedTheme: CustomTheme;

//       if (key === "text") {
//         updatedTheme = {
//           ...prev,
//           sidebar: { ...prev.sidebar, text: value },
//           topbar: { ...prev.topbar, text: value },
//           main: { ...prev.main, text: value },
//         };
//       } else if (section === "sidebar" || section === "topbar") {
//         let newBackground = prev.sidebar.background;
//         let newButton = prev.sidebar.button;

//         if (key === "background") {
//           newBackground = value;
//           newButton = lightenColor(value, 0.2);
//         } else if (key === "button") {
//           newButton = value;
//           newBackground = darkenColor(value, 0.2);
//         }

//         updatedTheme = {
//           ...prev,
//           sidebar: {
//             ...prev.sidebar,
//             background: newBackground,
//             button: newButton,
//             text: prev.sidebar.text,
//           },
//           topbar: {
//             ...prev.topbar,
//             background: newBackground,
//             button: newButton,
//             text: prev.topbar.text,
//           },
//           main: { ...prev.main, button: newButton },
//         };
//       } else {
//         updatedTheme = {
//           ...prev,
//           [section]: { ...(prev[section] as SectionTheme), [key]: value },
//         };
//       }

//       // 🔹 TEMPORARY: live preview
//       setCustomTheme(updatedTheme);

//       return updatedTheme;
//     });
//   };

//   // const setMainBackground = (color: "white" | "dark") => {
//   //   const newBg = color === "white" ? "#ffffff" : "#1f1f1f"; // dark instead of black

//   //   // 1️⃣ Update local popup state
//   //   setLocalTheme((prev) => ({
//   //     ...prev,
//   //     main: {
//   //       ...prev.main,
//   //       background: newBg,
//   //       button: prev.main.button, // keep main button as is
//   //     },
//   //     globalBackground: newBg,
//   //   }));

//   //   // 2️⃣ Immediately update the store so UI changes
//   //   setCustomTheme({
//   //     main: {
//   //       background: newBg,
//   //       button: localTheme.main.button, // keep button
//   //       text: localTheme.main.text, // add this line!
//   //     },
//   //     globalBackground: newBg,
//   //   });
//   // };
//   const [isDarkMode, setIsDarkMode] = useState(
//     localTheme.main.background === "#1f1f1f"
//   );

//   // const setMainBackground = (mode: "white" | "dark") => {
//   //   const newBg = mode === "white" ? "#ffffff" : "#1f1f1f";
//   //   const newText = mode === "white" ? "#262727" : "#ffffff"; // ✅ auto text color
//   //   setIsDarkMode(mode === "dark"); // ✅ sync toggle UI
//   //   // Update local popup state
//   //   setLocalTheme((prev) => ({
//   //     ...prev,
//   //     main: {
//   //       ...prev.main,
//   //       background: newBg,
//   //       text: newText,
//   //     },
//   //     sidebar: {
//   //       ...prev.sidebar,
//   //       text: newText,
//   //     },
//   //     topbar: {
//   //       ...prev.topbar,
//   //       text: newText,
//   //     },
//   //     globalBackground: newBg,
//   //   }));

//   //   // Update Zustand store so UI updates globally
//   //   setCustomTheme({
//   //     ...customTheme,
//   //     main: {
//   //       ...customTheme.main,
//   //       background: newBg,
//   //       text: newText,
//   //     },
//   //     sidebar: {
//   //       ...customTheme.sidebar,
//   //       text: newText,
//   //     },
//   //     topbar: {
//   //       ...customTheme.topbar,
//   //       text: newText,
//   //     },
//   //     globalBackground: newBg,
//   //   });
//   // };
//   const setMainBackground = (mode: "white" | "dark") => {
//     const newBg = mode === "white" ? "#ffffff" : "#1f1f1f";
//     const newText = mode === "white" ? "#262727" : "#ffffff"; // text for main only

//     setIsDarkMode(mode === "dark"); // sync toggle UI

//     // Update local popup state (main only)
//     setLocalTheme((prev) => ({
//       ...prev,
//       main: {
//         ...prev.main,
//         background: newBg,
//         text: newText,
//       },
//       globalBackground: newBg, // optional: global background can still change
//     }));

//     // Update Zustand store (main only)
//     setCustomTheme({
//       ...customTheme,
//       main: {
//         ...customTheme.main,
//         background: newBg,
//         text: newText,
//       },
//       globalBackground: newBg,
//     });
//   };

//   // const handleReset = () => {
//   //   // ✅ Force default light (white) background
//   //   const resetTheme: CustomTheme = {
//   //     ...defaultCustomTheme,
//   //     main: {
//   //       ...defaultCustomTheme.main,
//   //       background: "#000000", // force white
//   //       text: "#000000",
//   //     },
//   //   };

//   //   // 1️⃣ Update local popup state
//   //   setLocalTheme(resetTheme);

//   //   // 2️⃣ Update Zustand store so the entire app reflects defaults
//   //   setCustomTheme(resetTheme);

//   //   // 3️⃣ Sync dark mode toggle UI
//   //   setIsDarkMode(false);
//   // };
//   const handleReset = () => {
//     const resetTheme: CustomTheme = {
//       sidebar: {
//         background: "#235e8b",
//         text: "#ffffff",
//         button: "#EDEDED80",
//       },
//       topbar: {
//         background: "#235e8b",
//         text: "#ffffff",
//         button: "rgba(255,255,255,0.1)",
//       },
//       main: {
//         background: "#ffffff",
//         text: "#000000",
//         button: defaultCustomTheme.main.button,
//       },
//       globalBackground: "#ffffff",
//     };

//     // Update local state
//     setLocalTheme(resetTheme);

//     // Update global store
//     setCustomTheme(resetTheme);

//     // Reset dark mode toggle UI
//     setIsDarkMode(false);
//   };

//   if (!isOpen) return null;
//   // ---------- JSX ----------
//   return (
//     <div className="fixed inset-0  flex items-center justify-center z-[9999]">
//       <div className="relative w-full h-full flex items-center justify-center">
//         <Draggable
//           bounds="parent"
//           nodeRef={nodeRef}
//           cancel=".color-picker, input, button"
//         >
//           <div
//             ref={nodeRef}
//             className="relative border bg-[#bfb9b982] border-gray-300  backdrop-blur-sm bg-white-800/70 p-4  rounded-lg shadow-lg w-[220px] max-h-[70vh] overflow-y-auto cursor-move"
//           >
//             <button
//               title="Close"
//               onClick={() => {
//                 setCustomTheme(originalTheme); // restore previous theme
//                 onClose(); // then close popup
//               }}
//               className="absolute top-[3px] right-[2px]  rounded-full flex items-center justify-center z-10"
//             >
//               <i className="text-gray text-xs fa-solid fa-xmark w-5 h-5"></i>
//             </button>
//             <div className="space-y-1 items-center justify-center">
//               {(["topbar"] as SectionKey[]).map((section) => {
//                 const s = localTheme[section];
//                 return (
//                   <div key={section}>
//                     <div className="grid grid-cols-2 gap-3 items-center">
//                       {/* Background */}
//                       <label className="flex flex-col gap-2 col-span-2 items-center w-full">
//                         <HexColorPicker
//                           color={s.background}
//                           onChange={(c) =>
//                             handleSectionChange(section, "background", c)
//                           }
//                           className=" color-picker w-full h-40 rounded-lg"
//                         />
//                         <input
//                           title="background"
//                           type="text"
//                           value={s.background}
//                           onChange={(e) =>
//                             handleSectionChange(
//                               section,
//                               "background",
//                               e.target.value
//                             )
//                           }
//                           className="  w-32 text-center "
//                         />
//                       </label>
//                     </div>
//                   </div>
//                 );
//               })}

//               {/* Main Section */}
//               <div className="mt-4 relative flex justify-between items-center w-full">
//                 {/* Main Section Toggle with label */}
//                 <div className="flex flex-col items-center">
//                   <span className="text-xs mb-1">Main</span>
//                   <label
//                     className={`toggle-btn relative ${
//                       isDarkMode ? "toggled" : ""
//                     }`}
//                     onClick={() => {
//                       const newMode = !isDarkMode ? "dark" : "white";
//                       setIsDarkMode(!isDarkMode);
//                       setMainBackground(newMode);
//                     }}
//                   >
//                     {/* Sliding Light/Dark label */}
//                     <span
//                       className={`absolute inset-0 flex items-center text-[8px] font-semibold pointer-events-none transition-all duration-300 ${
//                         isDarkMode
//                           ? "justify-start pl-[6px] text-white"
//                           : "justify-end pr-[6px] text-black"
//                       }`}
//                     >
//                       {isDarkMode ? "Dark" : "Light"}
//                     </span>

//                     {/* Thumb */}
//                     <div className="thumb"></div>
//                   </label>
//                 </div>

//                 {/* Sidebar/Topbar Text Toggle with label */}
//                 <div className="flex flex-col items-center">
//                   <span className="text-xs mb-1">Shell</span>
//                   <label
//                     className={`toggle-btn relative ${
//                       isSidebarDarkText ? "toggled" : ""
//                     }`}
//                     onClick={toggleSidebarText}
//                   >
//                     {/* Sliding Light/Dark label (independent from Main toggle) */}
//                     <span
//                       className={`absolute inset-0 flex items-center text-[8px] font-semibold pointer-events-none transition-all duration-300 ${
//                         isSidebarDarkText
//                           ? "justify-start pl-[6px] text-white"
//                           : "justify-end pr-[6px] text-black"
//                       }`}
//                     >
//                       {isSidebarDarkText ? "Dark" : "Light"}
//                     </span>

//                     <div className="thumb"></div>
//                   </label>
//                 </div>

//                 {/* Defaults button */}
//                 <button
//                   onClick={handleReset}
//                   className="absolute left-1/2 -translate-x-1/2
//       bg-transparent text-gray-400
//       px-3
//       hover:text-gray-500 hover:underline dark:text-gray-500 dark:hover:text-gray-400"
//                 >
//                   Reset Default
//                 </button>
//               </div>
//             </div>

//             {/* <div className="flex items-center justify-center ">
//               <div>
//                 <button
//                   onClick={onClose}
//                   className="   p-2 flex items-center justify-center"
//                 >
//                   <img src="exit icon2.jpg" alt="Exit" className="w-8 h-8" />
//                 </button>
//               </div>
//             </div> */}
//             <div className="flex justify-end mt-6">
//               <button
//                 onClick={() => {
//                   onClose(); // keep the chosen colors and close
//                 }}
//                 className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </Draggable>
//       </div>
//     </div>
//   );
// };

// export default CustomThemePopup;
import React, { useEffect, useRef, useState } from "react";
import { useDarkModeStore } from "./useDarkModeStore";
import Draggable from "react-draggable";
import { HexColorPicker } from "react-colorful";

type SectionTheme = {
  background: string;
  text: string;
  button: string;
};

type CustomTheme = {
  sidebar: SectionTheme;
  topbar: SectionTheme;
  main: SectionTheme;
  globalBackground?: string;
};

interface CustomThemePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const defaultSection = {
  background: "#ffffff",
  text: "#000000",
  button: "#4a90e2",
};

const defaultCustomTheme: CustomTheme = {
  sidebar: {
    ...defaultSection,
    background: "#235e8b",
    text: "#ffffff",
    button: "#EDEDED80",
  },
  topbar: {
    ...defaultSection,
    background: "#235e8b",
    text: "#ffffff",
    button: "rgba(255,255,255,0.1)",
  },
  main: { ...defaultSection, background: "#1C75BC26", text: "#000000" },
};

const CustomThemePopup: React.FC<CustomThemePopupProps> = ({
  isOpen,
  onClose,
}) => {
  const { customTheme, setCustomTheme } = useDarkModeStore();
  const [localTheme, setLocalTheme] = useState<CustomTheme>(
    customTheme ?? defaultCustomTheme
  );
  const nodeRef = useRef<HTMLDivElement>(null);
  const [originalTheme, setOriginalTheme] = useState<CustomTheme>(
    customTheme ?? defaultCustomTheme
  );

  // useEffect(() => {
  //   if (isOpen) {
  //     setOriginalTheme(customTheme ?? defaultCustomTheme);
  //     setLocalTheme(customTheme ?? defaultCustomTheme);

  //     // Apply local theme to UI temporarily for preview
  //     setCustomTheme(customTheme ?? defaultCustomTheme);
  //   }
  // }, [isOpen]);
  useEffect(() => {
    if (isOpen) {
      const baseTheme = customTheme ?? defaultCustomTheme;
      setOriginalTheme(baseTheme);
      setLocalTheme(baseTheme);

      // ✅ Set toggle states based on actual theme
      setIsDarkMode(baseTheme.main.background === "#1f1f1f");
      setIsSidebarDarkText(baseTheme.sidebar.text !== "#ffffff");

      // Apply theme for live preview
      setCustomTheme(baseTheme);
    }
  }, [isOpen]);

  type SectionKey = "sidebar" | "topbar" | "main";

  // ---------- Utility Functions ----------
  const lightenColor = (hex: string, percent: number) => {
    const cleanHex = hex.replace("#", "");
    const hexFull =
      cleanHex.length === 3
        ? cleanHex
            .split("")
            .map((c) => c + c)
            .join("")
        : cleanHex;
    const num = parseInt(hexFull, 16);
    let r = (num >> 16) & 0xff;
    let g = (num >> 8) & 0xff;
    let b = num & 0xff;
    r = Math.min(255, Math.floor(r + (255 - r) * percent));
    g = Math.min(255, Math.floor(g + (255 - g) * percent));
    b = Math.min(255, Math.floor(b + (255 - b) * percent));
    return (
      "#" +
      [r, g, b]
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase()
    );
  };

  const darkenColor = (hex: string, percent: number) => {
    const cleanHex = hex.replace("#", "");
    const hexFull =
      cleanHex.length === 3
        ? cleanHex
            .split("")
            .map((c) => c + c)
            .join("")
        : cleanHex;
    const num = parseInt(hexFull, 16);
    let r = (num >> 16) & 0xff;
    let g = (num >> 8) & 0xff;
    let b = num & 0xff;
    r = Math.max(0, Math.floor(r * (1 - percent)));
    g = Math.max(0, Math.floor(g * (1 - percent)));
    b = Math.max(0, Math.floor(b * (1 - percent)));
    return (
      "#" +
      [r, g, b]
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase()
    );
  };
  const [isSidebarDarkText, setIsSidebarDarkText] = useState(
    localTheme.sidebar.text === "#ffffff"
  );

  const toggleSidebarText = () => {
    const newText = isSidebarDarkText ? "#ffffff" : "#262727"; // dark/light text
    setIsSidebarDarkText(!isSidebarDarkText);

    // Update local state only for sidebar/topbar text
    setLocalTheme((prev) => ({
      ...prev,
      sidebar: { ...prev.sidebar, text: newText },
      topbar: { ...prev.topbar, text: newText },
    }));

    // Update Zustand store
    setCustomTheme({
      ...customTheme,
      sidebar: { ...customTheme.sidebar, text: newText },
      topbar: { ...customTheme.topbar, text: newText },
    });
  };

  // const handleSectionChange = (
  //   section: SectionKey,
  //   key: keyof SectionTheme,
  //   value: string
  // ) => {
  //   setLocalTheme((prev) => {
  //     let updatedTheme: CustomTheme;

  //     // Sync text for all sections
  //     if (key === "text") {
  //       updatedTheme = {
  //         ...prev,
  //         sidebar: { ...prev.sidebar, text: value },
  //         topbar: { ...prev.topbar, text: value },
  //         main: { ...prev.main, text: value },
  //       };
  //     }
  //     // Sync sidebar/topbar button & background
  //     else if (section === "sidebar" || section === "topbar") {
  //       let newBackground = prev.sidebar.background;
  //       let newButton = prev.sidebar.button;

  //       if (key === "background") {
  //         newBackground = value;
  //         newButton = lightenColor(value, 0.2);
  //       } else if (key === "button") {
  //         newButton = value;
  //         newBackground = darkenColor(value, 0.2);
  //       }

  //       updatedTheme = {
  //         ...prev,
  //         sidebar: {
  //           ...prev.sidebar,
  //           background: newBackground,
  //           button: newButton,
  //           text: prev.sidebar.text,
  //         },
  //         topbar: {
  //           ...prev.topbar,
  //           background: newBackground,
  //           button: newButton,
  //           text: prev.topbar.text,
  //         },
  //         main: { ...prev.main, button: newButton },
  //       };
  //     }
  //     // Main section changes
  //     else {
  //       updatedTheme = {
  //         ...prev,
  //         [section]: { ...(prev[section] as SectionTheme), [key]: value },
  //       };
  //     }

  //     // 💡 LIVE UPDATE: update the global store too
  //     setLocalTheme(updatedTheme);

  //     return updatedTheme;
  //   });
  // };
  // const handleSectionChange = (
  //   section: SectionKey,
  //   key: keyof SectionTheme,
  //   value: string
  // ) => {
  //   setLocalTheme((prev) => {
  //     let updatedTheme: CustomTheme;

  //     if (key === "text") {
  //       updatedTheme = {
  //         ...prev,
  //         sidebar: { ...prev.sidebar, text: value },
  //         topbar: { ...prev.topbar, text: value },
  //         main: { ...prev.main, text: value },
  //       };
  //     } else if (section === "sidebar" || section === "topbar") {
  //       let newBackground = prev.sidebar.background;
  //       let newButton = prev.sidebar.button;

  //       if (key === "background") {
  //         newBackground = value;
  //         newButton = lightenColor(value, 0.2);
  //       } else if (key === "button") {
  //         newButton = value;
  //         newBackground = darkenColor(value, 0.2);
  //       }

  //       updatedTheme = {
  //         ...prev,
  //         sidebar: {
  //           ...prev.sidebar,
  //           background: newBackground,
  //           button: newButton,
  //           text: prev.sidebar.text,
  //         },
  //         topbar: {
  //           ...prev.topbar,
  //           background: newBackground,
  //           button: newButton,
  //           text: prev.topbar.text,
  //         },
  //         main: { ...prev.main, button: newButton },
  //       };
  //     } else {
  //       updatedTheme = {
  //         ...prev,
  //         [section]: { ...(prev[section] as SectionTheme), [key]: value },
  //       };
  //     }

  //     // ✅ Only update local state
  //     return updatedTheme;
  //   });
  // };
  const handleSectionChange = (
    section: SectionKey,
    key: keyof SectionTheme,
    value: string
  ) => {
    setLocalTheme((prev) => {
      let updatedTheme: CustomTheme;

      // if (key === "text") {
      //   updatedTheme = {
      //     ...prev,
      //     sidebar: { ...prev.sidebar, text: value },
      //     topbar: { ...prev.topbar, text: value },
      //     main: { ...prev.main, text: value },
      //   };
      // } else
      if (section === "sidebar" || section === "topbar") {
        let newBackground = prev.sidebar.background;
        let newButton = prev.sidebar.button;

        if (key === "background") {
          newBackground = value;
          newButton = lightenColor(value, 0.2);
        } else if (key === "button") {
          newButton = value;
          newBackground = darkenColor(value, 0.2);
        }

        updatedTheme = {
          ...prev,
          sidebar: {
            ...prev.sidebar,
            background: newBackground,
            button: newButton,
            text: prev.sidebar.text,
          },
          topbar: {
            ...prev.topbar,
            background: newBackground,
            button: newButton,
            text: prev.topbar.text,
          },
          main: { ...prev.main, button: newButton },
        };
      } else {
        updatedTheme = {
          ...prev,
          [section]: { ...(prev[section] as SectionTheme), [key]: value },
        };
      }

      // 🔹 TEMPORARY: live preview
      setCustomTheme(updatedTheme);

      return updatedTheme;
    });
  };

  // const setMainBackground = (color: "white" | "dark") => {
  //   const newBg = color === "white" ? "#ffffff" : "#1f1f1f"; // dark instead of black

  //   // 1️⃣ Update local popup state
  //   setLocalTheme((prev) => ({
  //     ...prev,
  //     main: {
  //       ...prev.main,
  //       background: newBg,
  //       button: prev.main.button, // keep main button as is
  //     },
  //     globalBackground: newBg,
  //   }));

  //   // 2️⃣ Immediately update the store so UI changes
  //   setCustomTheme({
  //     main: {
  //       background: newBg,
  //       button: localTheme.main.button, // keep button
  //       text: localTheme.main.text, // add this line!
  //     },
  //     globalBackground: newBg,
  //   });
  // };
  const [isDarkMode, setIsDarkMode] = useState(
    localTheme.main.background === "#1f1f1f"
  );

  // const setMainBackground = (mode: "white" | "dark") => {
  //   const newBg = mode === "white" ? "#ffffff" : "#1f1f1f";
  //   const newText = mode === "white" ? "#262727" : "#ffffff"; // ✅ auto text color
  //   setIsDarkMode(mode === "dark"); // ✅ sync toggle UI
  //   // Update local popup state
  //   setLocalTheme((prev) => ({
  //     ...prev,
  //     main: {
  //       ...prev.main,
  //       background: newBg,
  //       text: newText,
  //     },
  //     sidebar: {
  //       ...prev.sidebar,
  //       text: newText,
  //     },
  //     topbar: {
  //       ...prev.topbar,
  //       text: newText,
  //     },
  //     globalBackground: newBg,
  //   }));

  //   // Update Zustand store so UI updates globally
  //   setCustomTheme({
  //     ...customTheme,
  //     main: {
  //       ...customTheme.main,
  //       background: newBg,
  //       text: newText,
  //     },
  //     sidebar: {
  //       ...customTheme.sidebar,
  //       text: newText,
  //     },
  //     topbar: {
  //       ...customTheme.topbar,
  //       text: newText,
  //     },
  //     globalBackground: newBg,
  //   });
  // };
  const setMainBackground = (mode: "white" | "dark") => {
    const newBg = mode === "white" ? "#ffffff" : "#1f1f1f";
    const newText = mode === "white" ? "#262727" : "#ffffff"; // text for main only

    setIsDarkMode(mode === "dark"); // sync toggle UI

    // Update local popup state (main only)
    setLocalTheme((prev) => ({
      ...prev,
      main: {
        ...prev.main,
        background: newBg,
        text: newText,
      },
      globalBackground: newBg, // optional: global background can still change
    }));

    // Update Zustand store (main only)
    setCustomTheme({
      ...customTheme,
      main: {
        ...customTheme.main,
        background: newBg,
        text: newText,
      },
      globalBackground: newBg,
    });
  };

  // const handleReset = () => {
  //   // ✅ Force default light (white) background
  //   const resetTheme: CustomTheme = {
  //     ...defaultCustomTheme,
  //     main: {
  //       ...defaultCustomTheme.main,
  //       background: "#000000", // force white
  //       text: "#000000",
  //     },
  //   };

  //   // 1️⃣ Update local popup state
  //   setLocalTheme(resetTheme);

  //   // 2️⃣ Update Zustand store so the entire app reflects defaults
  //   setCustomTheme(resetTheme);

  //   // 3️⃣ Sync dark mode toggle UI
  //   setIsDarkMode(false);
  // };
  const handleReset = () => {
    const resetTheme: CustomTheme = {
      sidebar: {
        background: "#235e8b",
        text: "#ffffff",
        button: "#EDEDED80",
      },
      topbar: {
        background: "#235e8b",
        text: "#ffffff",
        button: "rgba(255,255,255,0.1)",
      },
      main: {
        background: "#ffffff",
        text: "#000000",
        button: defaultCustomTheme.main.button,
      },
      globalBackground: "#ffffff",
    };

    // Update local state
    setLocalTheme(resetTheme);

    // Update global store
    setCustomTheme(resetTheme);

    // Reset dark mode toggle UI
    setIsDarkMode(false);
    setIsSidebarDarkText(false);
  };

  if (!isOpen) return null;
  // ---------- JSX ----------
  return (
    <div className="fixed inset-0  flex items-center justify-center z-[9999]">
      <div className="relative w-full h-full flex items-center justify-center">
        <Draggable
          bounds="parent"
          nodeRef={nodeRef}
          handle=".popup-header"
          cancel=".color-picker, input, button"
        >
          <div
            ref={nodeRef}
            className="relative border bg-[#bfb9b982] border-gray-300 backdrop-blur-sm bg-white-800/70 pt-0 pb-2 px-2 rounded-lg shadow-lg w-[220px] max-h-[70vh] overflow-y-auto"
          >
            {/* --- HEADER (matches widget header) --- */}
            <div
              className="popup-header flex items-center justify-between w-full rounded-t-lg px-3 py-2 mb-2 border-b cursor-move select-none"
              style={{
                backgroundColor:
                  useDarkModeStore.getState().styles.widgetHeaderBg,
                color: useDarkModeStore.getState().styles.widgetText,
                borderColor: useDarkModeStore.getState().styles.widgetBorder,
              }}
            >
              <span className="font-semibold text-sm">Custom Theme</span>
            </div>

            {/* <button
              title="Close"
              onClick={() => {
                setCustomTheme(originalTheme);
                setIsDarkMode(originalTheme.main.background === "#1f1f1f");
                setIsSidebarDarkText(originalTheme.sidebar.text === "#ffffff");
                onClose();
              }}
              className="absolute top-[3px] right-[2px]  rounded-full flex items-center justify-center z-10"
            >
              <i className="text-gray text-xs fa-solid fa-xmark w-5 h-5"></i>
            </button> */}
            <div className="space-y-1 items-center justify-center">
              {(["topbar"] as SectionKey[]).map((section) => {
                const s = localTheme[section];
                return (
                  <div key={section}>
                    <div className="grid grid-cols-2 gap-3 items-center">
                      {/* Background */}
                      <label className="flex flex-col gap-2 col-span-2 items-center w-full">
                        <HexColorPicker
                          color={s.background}
                          onChange={(c) =>
                            handleSectionChange(section, "background", c)
                          }
                          className=" color-picker w-full h-40 rounded-lg"
                        />
                        <input
                          title="background"
                          type="text"
                          value={s.background}
                          onChange={(e) =>
                            handleSectionChange(
                              section,
                              "background",
                              e.target.value
                            )
                          }
                          className="  w-32 text-center "
                        />
                      </label>
                    </div>
                  </div>
                );
              })}

              {/* Main Section */}
              <div className="mt-4 relative flex justify-between items-center w-full">
                {/* Main Section Toggle with label */}
                <div className="flex flex-col items-center">
                  <span className="text-xs mb-1">Main</span>
                  <label
                    className={`toggle-btn relative ${
                      isDarkMode ? "toggled" : ""
                    }`}
                    onClick={() => {
                      const newMode = !isDarkMode ? "dark" : "white";
                      setIsDarkMode(!isDarkMode);
                      setMainBackground(newMode);
                    }}
                  >
                    {/* Sliding Light/Dark label */}
                    <span
                      className={`absolute inset-0 flex items-center text-[8px] font-semibold pointer-events-none transition-all duration-300 ${
                        isDarkMode
                          ? "justify-start pl-[6px] text-white"
                          : "justify-end pr-[6px] text-black"
                      }`}
                    >
                      {isDarkMode ? "Dark" : "Light"}
                    </span>

                    {/* Thumb */}
                    <div className="thumb"></div>
                  </label>
                </div>

                {/* Sidebar/Topbar Text Toggle with label */}
                <div className="flex flex-col items-center">
                  <span className="text-xs mb-1">Shell</span>
                  <label
                    className={`toggle-btn relative ${
                      isSidebarDarkText ? "toggled" : ""
                    }`}
                    onClick={toggleSidebarText}
                  >
                    {/* Sliding Light/Dark label (independent from Main toggle) */}
                    <span
                      className={`absolute inset-0 flex items-center text-[8px] font-semibold pointer-events-none transition-all duration-300 ${
                        isSidebarDarkText
                          ? "justify-start pl-[6px] text-white"
                          : "justify-end pr-[6px] text-black"
                      }`}
                    >
                      {isSidebarDarkText ? "Dark" : "Light"}
                    </span>

                    <div className="thumb"></div>
                  </label>
                </div>

                {/* Defaults button */}
                <button
                  onClick={handleReset}
                  className="absolute left-1/2 -translate-x-1/2 
      bg-transparent text-
      px-3 
      hover:text-gray-500 hover:underline dark:text-gray-500 dark:hover:text-gray-400"
                >
                  Reset Default
                </button>
              </div>
            </div>

            {/* <div className="flex items-center justify-center ">
              <div>
                <button
                  onClick={onClose}
                  className="   p-2 flex items-center justify-center"
                >
                  <img src="exit icon2.jpg" alt="Exit" className="w-8 h-8" />
                </button>
              </div>
            </div> */}
            <div className="flex justify-between items-center gap-3 mt-6">
              {/* Cancel button restores the original theme */}
              <button
                onClick={() => {
                  setCustomTheme(originalTheme);
                  setIsDarkMode(originalTheme.main.background === "#1f1f1f");
                  setIsSidebarDarkText(
                    originalTheme.sidebar.text === "#ffffff"
                  );
                  onClose();
                }}
                className="px-3 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>

              {/* Save button keeps current theme */}
              <button
                onClick={() => {
                  onClose(); // keep the chosen colors and close
                }}
                className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Save
              </button>
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default CustomThemePopup;
