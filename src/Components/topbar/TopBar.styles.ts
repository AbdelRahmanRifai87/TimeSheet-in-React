// TopBar.styles.ts

export const topBarStyles = {
  topbar:
    "   top-0 right-0  h-[6.5vh] px-[16px] flex items-center justify-between  text-white z-[9999] ",
  companyContainer:
    // Matches: background-color: #dbeeff; color: #004578; padding: 6px 12px; border-radius: 8px;
    "flex items-center bg-[#dbeeff] text-[#004578] px-[12px] py-[6px] rounded-[8px] font-semibold",

  companyIcon:
    // Matches: margin-right: 6px; color: #248ee0;
    "text-[#248ee0] mr-[6px]",

  companySelect:
    // Matches: same styles with dropdown icon
    "bg-none border-none text-[#248ee0] font-semibold text-[14px] pr-[18px] appearance-none cursor-pointer focus:outline-none",

  topbarCenter: "flex flex-1 justify-center",

  searchContainer:
    // Matches: background-color: #0b85e1; padding: 6px 12px; border-radius: 6px;
    "flex items-center w-full max-w-[300px] bg-white/10 rounded-[6px] px-[12px] py-[6px]",

  searchIcon:
    // Matches: color: #e0e0e0; margin-right: 8px;
    "text-[#e0e0e0] mr-[8px]",

  searchInput:
    // Matches: transparent bg, white text, 14px, full width
    "w-full bg-transparent border-none text-white text-[14px] outline-none placeholder-white placeholder-opacity-100",

  topbarRight: "flex items-center",

  iconButton:
    // Matches: width: 36px; height: 36px; margin-left: 8px; border-radius: 50%; white text; hover bg
    "ml-[8px] w-[36px] h-[36px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border-none cursor-pointer",

  icon:
    // Matches: font-size: 18px; color: white;
    "text-white text-[18px]",

  avatar:
    // Matches: width: 32px; height: 32px; margin-left: 12px; rounded;
    "w-[32px] h-[32px] rounded-full ml-[12px]",

  userName:
    // Matches: margin-left: 8px; font-size: 14px; lowercase; opacity
    "ml-[8px] text-[14px] font-normal lowercase opacity-90 hidden md:inline",

  // Optional: Responsive behavior from @media
  searchContainerMobile: "max-w-[200px] md:max-w-[300px]", // You can apply this as a conditional class
};
