// // // // import React, { useState } from "react";
// // // // import { useDarkModeStore } from "./useDarkModeStore";

// // // // interface CustomThemePopupProps {
// // // //   isOpen: boolean;
// // // //   onClose: () => void;
// // // // }

// // // // const CustomThemePopup: React.FC<CustomThemePopupProps> = ({
// // // //   isOpen,
// // // //   onClose,
// // // // }) => {
// // // //   const { customTheme, setCustomTheme } = useDarkModeStore();

// // // //   const [localTheme, setLocalTheme] = useState(customTheme);

// // // //   if (!isOpen) return null;

// // // //   const handleChange = (
// // // //     section: keyof typeof customTheme,
// // // //     key: string,
// // // //     value: string
// // // //   ) => {
// // // //     setLocalTheme((prev) => ({
// // // //       ...prev,
// // // //       [section]: { ...prev[section], [key]: value },
// // // //     }));
// // // //   };

// // // //   const handleSave = () => {
// // // //     setCustomTheme(localTheme);
// // // //     onClose();
// // // //   };

// // // //   return (
// // // //     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
// // // //       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[500px] max-h-[90vh] overflow-y-auto">
// // // //         <h2 className="text-xl font-bold mb-4 text-center">
// // // //           🎨 Customize Your Theme
// // // //         </h2>

// // // //         <div className="space-y-4">
// // // //           {["topbar", "sidebar", "main"].map((section) => (
// // // //             <div key={section} className="border p-3 rounded-lg">
// // // //               <h3 className="font-semibold capitalize mb-2">
// // // //                 {section} Colors
// // // //               </h3>
// // // //               <div className="grid grid-cols-2 gap-3">
// // // //                 <label className="flex items-center gap-2">
// // // //                   <span>Background:</span>
// // // //                   <input
// // // //                     type="color"
// // // //                     value={
// // // //                       localTheme[section as keyof typeof customTheme].background
// // // //                     }
// // // //                     onChange={(e) =>
// // // //                       handleChange(
// // // //                         section as keyof typeof customTheme,
// // // //                         "background",
// // // //                         e.target.value
// // // //                       )
// // // //                     }
// // // //                   />
// // // //                 </label>
// // // //                 <label className="flex items-center gap-2">
// // // //                   <span>Text:</span>
// // // //                   <input
// // // //                     type="color"
// // // //                     value={localTheme[section as keyof typeof customTheme].text}
// // // //                     onChange={(e) =>
// // // //                       handleChange(
// // // //                         section as keyof typeof customTheme,
// // // //                         "text",
// // // //                         e.target.value
// // // //                       )
// // // //                     }
// // // //                   />
// // // //                 </label>
// // // //                 <label className="flex items-center gap-2">
// // // //                   <span>Button:</span>
// // // //                   <input
// // // //                     type="color"
// // // //                     value={
// // // //                       localTheme[section as keyof typeof customTheme].button
// // // //                     }
// // // //                     onChange={(e) =>
// // // //                       handleChange(
// // // //                         section as keyof typeof customTheme,
// // // //                         "button",
// // // //                         e.target.value
// // // //                       )
// // // //                     }
// // // //                   />
// // // //                 </label>
// // // //               </div>
// // // //             </div>
// // // //           ))}

// // // //           <div className="border p-3 rounded-lg">
// // // //             <h3 className="font-semibold mb-2">Whole Dashboard Background</h3>
// // // //             <input
// // // //               title="Global Background Color"
// // // //               type="color"
// // // //               value={localTheme.globalBackground}
// // // //               onChange={(e) =>
// // // //                 handleChange("globalBackground" as any, "", e.target.value)
// // // //               }
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         <div className="mt-6 flex justify-end gap-3">
// // // //           <button
// // // //             onClick={onClose}
// // // //             className="px-4 py-2 rounded bg-gray-400 text-white hover:bg-gray-500"
// // // //           >
// // // //             Cancel
// // // //           </button>
// // // //           <button
// // // //             onClick={handleSave}
// // // //             className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
// // // //           >
// // // //             Save
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CustomThemePopup;
// // // import React, { useEffect, useState } from "react";
// // // import { useDarkModeStore } from "./useDarkModeStore";
// // // // ----- Types (should match your store) -----
// // // type SectionTheme = {
// // //   background: string;
// // //   text: string;
// // //   button: string;
// // // };

// // // type CustomTheme = {
// // //   sidebar: SectionTheme;
// // //   topbar: SectionTheme;
// // //   main: SectionTheme;
// // //   globalBackground?: string;
// // // };

// // // interface CustomThemePopupProps {
// // //   isOpen: boolean;
// // //   onClose: () => void;
// // // }

// // // const defaultSection = {
// // //   background: "#ffffff",
// // //   text: "#000000",
// // //   button: "#4a90e2",
// // // };

// // // const defaultCustomTheme: CustomTheme = {
// // //   sidebar: { ...defaultSection, background: "#1e1e1e", text: "#ffffff" },
// // //   topbar: { ...defaultSection, background: "#235e8b", text: "#ffffff" },
// // //   main: { ...defaultSection, background: "#ffffff", text: "#000000" },
// // //   globalBackground: "#f5f5f5",
// // // };

// // // const CustomThemePopup: React.FC<CustomThemePopupProps> = ({
// // //   isOpen,
// // //   onClose,
// // // }) => {
// // //   const { customTheme, setCustomTheme } = useDarkModeStore();

// // //   // Initialize localTheme with store's customTheme (fallback to defaults)
// // //   const [localTheme, setLocalTheme] = useState<CustomTheme>(
// // //     customTheme ?? defaultCustomTheme
// // //   );

// // //   // When the store's customTheme changes (e.g. user switched accounts or restored), sync
// // //   useEffect(() => {
// // //     setLocalTheme(customTheme ?? defaultCustomTheme);
// // //   }, [customTheme]);

// // //   if (!isOpen) return null;

// // //   // Helper types
// // //   type SectionKey = "sidebar" | "topbar" | "main";

// // //   const handleSectionChange = (
// // //     section: SectionKey,
// // //     key: keyof SectionTheme,
// // //     value: string
// // //   ) => {
// // //     setLocalTheme((prev) => ({
// // //       ...prev,
// // //       [section]: {
// // //         // prev[section] is known to be SectionTheme because of the SectionKey type
// // //         ...(prev[section] as SectionTheme),
// // //         [key]: value,
// // //       },
// // //     }));
// // //   };

// // //   const handleGlobalBackgroundChange = (value: string) => {
// // //     setLocalTheme((prev) => ({
// // //       ...prev,
// // //       globalBackground: value,
// // //     }));
// // //   };

// // //   const handleSave = () => {
// // //     // Persist to store. store accepts Partial<CustomTheme> as well, but we pass full object
// // //     setCustomTheme(localTheme);
// // //     onClose();
// // //   };

// // //   const handleReset = () => {
// // //     setLocalTheme(defaultCustomTheme);
// // //   };

// // //   return (
// // //     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
// // //       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[520px] max-h-[90vh] overflow-y-auto">
// // //         <h2 className="text-xl font-bold mb-4 text-center">
// // //           🎨 Customize Your Theme
// // //         </h2>

// // //         <div className="space-y-4">
// // //           {(["topbar", "sidebar", "main"] as SectionKey[]).map((section) => {
// // //             const s = localTheme[section];
// // //             return (
// // //               <div key={section} className="border p-3 rounded-lg">
// // //                 <h3 className="font-semibold capitalize mb-2">
// // //                   {section} Colors
// // //                 </h3>
// // //                 <div className="grid grid-cols-2 gap-3 items-center">
// // //                   <label className="flex items-center gap-2">
// // //                     <span className="w-24">Background:</span>
// // //                     <input
// // //                       type="color"
// // //                       value={s.background}
// // //                       onChange={(e) =>
// // //                         handleSectionChange(
// // //                           section,
// // //                           "background",
// // //                           e.target.value
// // //                         )
// // //                       }
// // //                     />
// // //                     <input
// // //                       className="ml-2 p-1 text-xs w-full"
// // //                       value={s.background}
// // //                       onChange={(e) =>
// // //                         handleSectionChange(
// // //                           section,
// // //                           "background",
// // //                           e.target.value
// // //                         )
// // //                       }
// // //                     />
// // //                   </label>

// // //                   <label className="flex items-center gap-2">
// // //                     <span className="w-24">Text:</span>
// // //                     <input
// // //                       type="color"
// // //                       value={s.text}
// // //                       onChange={(e) =>
// // //                         handleSectionChange(section, "text", e.target.value)
// // //                       }
// // //                     />
// // //                     <input
// // //                       className="ml-2 p-1 text-xs w-full"
// // //                       value={s.text}
// // //                       onChange={(e) =>
// // //                         handleSectionChange(section, "text", e.target.value)
// // //                       }
// // //                     />
// // //                   </label>

// // //                   <label className="flex items-center gap-2 col-span-2">
// // //                     <span className="w-24">Button:</span>
// // //                     <input
// // //                       type="color"
// // //                       value={s.button}
// // //                       onChange={(e) =>
// // //                         handleSectionChange(section, "button", e.target.value)
// // //                       }
// // //                     />
// // //                     <input
// // //                       className="ml-2 p-1 text-xs w-full"
// // //                       value={s.button}
// // //                       onChange={(e) =>
// // //                         handleSectionChange(section, "button", e.target.value)
// // //                       }
// // //                     />
// // //                   </label>
// // //                 </div>
// // //               </div>
// // //             );
// // //           })}

// // //           <div className="border p-3 rounded-lg">
// // //             <h3 className="font-semibold mb-2">Whole Dashboard Background</h3>
// // //             <div className="flex items-center gap-3">
// // //               <input
// // //                 title="Global Background Color"
// // //                 type="color"
// // //                 value={localTheme.globalBackground ?? "#ffffff"}
// // //                 onChange={(e) => handleGlobalBackgroundChange(e.target.value)}
// // //               />
// // //               <input
// // //                 className="p-1 text-xs w-full"
// // //                 value={localTheme.globalBackground ?? ""}
// // //                 onChange={(e) => handleGlobalBackgroundChange(e.target.value)}
// // //                 placeholder="#ffffff"
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="mt-6 flex justify-between items-center">
// // //           <div>
// // //             <button
// // //               onClick={handleReset}
// // //               className="px-3 py-2 rounded bg-gray-300 text-black hover:bg-gray-400"
// // //             >
// // //               Reset to Defaults
// // //             </button>
// // //           </div>

// // //           <div className="flex gap-3">
// // //             <button
// // //               onClick={onClose}
// // //               className="px-4 py-2 rounded bg-gray-400 text-white hover:bg-gray-500"
// // //             >
// // //               Cancel
// // //             </button>
// // //             <button
// // //               onClick={handleSave}
// // //               className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
// // //             >
// // //               Save
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CustomThemePopup;
// // import React, { useEffect, useState } from "react";
// // import { useDarkModeStore } from "./useDarkModeStore";

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

// //   const [localTheme, setLocalTheme] = useState<CustomTheme>(
// //     customTheme ?? defaultCustomTheme
// //   );

// //   useEffect(() => {
// //     setLocalTheme(customTheme ?? defaultCustomTheme);
// //   }, [customTheme]);

// //   if (!isOpen) return null;

// //   type SectionKey = "sidebar" | "topbar" | "main";

// //   const handleSectionChange = (
// //     section: SectionKey,
// //     key: keyof SectionTheme,
// //     value: string
// //   ) => {
// //     setLocalTheme((prev) => ({
// //       ...prev,
// //       [section]: {
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

// //                     {/* ✅ For MAIN section, use global background functionality instead */}
// //                     {section === "main" ? (
// //                       <>
// //                         <input
// //                           type="color"
// //                           value={localTheme.globalBackground ?? "#ffffff"}
// //                           onChange={(e) =>
// //                             handleGlobalBackgroundChange(e.target.value)
// //                           }
// //                         />
// //                         <input
// //                           className="ml-2 p-1 text-xs w-full"
// //                           value={localTheme.globalBackground ?? ""}
// //                           onChange={(e) =>
// //                             handleGlobalBackgroundChange(e.target.value)
// //                           }
// //                           placeholder="#ffffff"
// //                         />
// //                       </>
// //                     ) : (
// //                       <>
// //                         <input
// //                           type="color"
// //                           value={s.background}
// //                           onChange={(e) =>
// //                             handleSectionChange(
// //                               section,
// //                               "background",
// //                               e.target.value
// //                             )
// //                           }
// //                         />
// //                         <input
// //                           className="ml-2 p-1 text-xs w-full"
// //                           value={s.background}
// //                           onChange={(e) =>
// //                             handleSectionChange(
// //                               section,
// //                               "background",
// //                               e.target.value
// //                             )
// //                           }
// //                         />
// //                       </>
// //                     )}
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
// // import React, { useEffect, useState } from "react";
// // import { useDarkModeStore } from "./useDarkModeStore";

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

// //   const [localTheme, setLocalTheme] = useState<CustomTheme>(
// //     customTheme ?? defaultCustomTheme
// //   );

// //   useEffect(() => {
// //     setLocalTheme(customTheme ?? defaultCustomTheme);
// //   }, [customTheme]);

// //   if (!isOpen) return null;

// //   type SectionKey = "sidebar" | "topbar" | "main";

// //   const handleSectionChange = (
// //     section: SectionKey,
// //     key: keyof SectionTheme,
// //     value: string
// //   ) => {
// //     setLocalTheme((prev) => ({
// //       ...prev,
// //       [section]: {
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

// //                     {/* ✅ For MAIN section, use global background functionality instead */}
// //                     {section === "main" ? (
// //                       <>
// //                         <input
// //                           type="color"
// //                           value={localTheme.globalBackground ?? "#ffffff"}
// //                           onChange={(e) =>
// //                             handleGlobalBackgroundChange(e.target.value)
// //                           }
// //                         />
// //                         <input
// //                           className="ml-2 p-1 text-xs w-full"
// //                           value={localTheme.globalBackground ?? ""}
// //                           onChange={(e) =>
// //                             handleGlobalBackgroundChange(e.target.value)
// //                           }
// //                           placeholder="#ffffff"
// //                         />
// //                       </>
// //                     ) : (
// //                       <>
// //                         <input
// //                           type="color"
// //                           value={s.background}
// //                           onChange={(e) =>
// //                             handleSectionChange(
// //                               section,
// //                               "background",
// //                               e.target.value
// //                             )
// //                           }
// //                         />
// //                         <input
// //                           className="ml-2 p-1 text-xs w-full"
// //                           value={s.background}
// //                           onChange={(e) =>
// //                             handleSectionChange(
// //                               section,
// //                               "background",
// //                               e.target.value
// //                             )
// //                           }
// //                         />
// //                       </>
// //                     )}
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

//   useEffect(() => {
//     setLocalTheme(customTheme ?? defaultCustomTheme);
//   }, [customTheme]);

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
//     setLocalTheme((prev) => {
//       // Sync text for all sections
//       if (key === "text") {
//         return {
//           ...prev,
//           sidebar: { ...prev.sidebar, text: value },
//           topbar: { ...prev.topbar, text: value },
//           main: { ...prev.main, text: value },
//         };
//       }

//       // Sync sidebar/topbar button & background
//       if (section === "sidebar" || section === "topbar") {
//         let newBackground = prev.sidebar.background;
//         let newButton = prev.sidebar.button;

//         if (key === "background") {
//           newBackground = value;
//           newButton = lightenColor(value, 0.2);
//         } else if (key === "button") {
//           newButton = value;
//           newBackground = darkenColor(value, 0.2);
//         }

//         return {
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
//           main: { ...prev.main, button: newButton }, // main button follows sidebar/topbar
//         };
//       }

//       // Main section changes (should rarely happen)
//       return {
//         ...prev,
//         [section]: { ...(prev[section] as SectionTheme), [key]: value },
//       };
//     });
//   };

//   // ---------- Main Background Buttons ----------
//   const setMainBackground = (color: "white" | "black") => {
//     setLocalTheme((prev) => ({
//       ...prev,
//       main: {
//         ...prev.main,
//         background: color === "white" ? "#ffffff" : "#000000",
//         button: prev.sidebar.button, // always follows sidebar/topbar
//       },
//       globalBackground: color === "white" ? "#ffffff" : "#000000",
//     }));
//   };

//   const handleSave = () => {
//     setCustomTheme(localTheme);
//     onClose();
//   };

//   const handleReset = () => {
//     setLocalTheme(defaultCustomTheme);
//   };

//   // ---------- JSX ----------
//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[520px] max-h-[90vh] overflow-y-auto">
//         <h2 className="text-xl font-bold mb-4 text-center">
//           🎨 Customize Your Theme
//         </h2>

//         <div className="space-y-4">
//           {(["topbar", "sidebar"] as SectionKey[]).map((section) => {
//             const s = localTheme[section];
//             return (
//               <div key={section} className="border p-3 rounded-lg">
//                 <h3 className="font-semibold capitalize mb-2">
//                   {section} Colors
//                 </h3>
//                 <div className="grid grid-cols-2 gap-3 items-center">
//                   {/* Background */}
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
//                       placeholder="#ffffff"
//                     />
//                   </label>

//                   {/* Text */}
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

//                   {/* Button */}
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

//           {/* Main section with only white/black buttons */}
//           <div className="border p-3 rounded-lg">
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
