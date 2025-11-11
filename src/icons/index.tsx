// lib/icons/index.tsx
"use client";

import * as React from "react";
import type { IconProps } from "@tabler/icons-react";
import {
  IconUser,
  IconUsers,
  IconLock,
  IconMail,
  IconLogout,
  IconSettings,
  IconHome,
  IconPhone,
  IconBell,
  IconPlus,
  IconTrash,
  IconPencil,
  IconCheck,
  IconX,
  IconEye,
  IconEyeOff,
  //   IconLayers,
  IconMap,
  //   IconMegaphone,
  IconChartLine,
  IconDownload,
  IconChevronRight,
  IconMoon,
  IconLayoutDashboard,
  IconLayoutDashboardFilled,
  IconMapPin,
  IconReport,
  IconAlertHexagon,
  IconCalendarWeek,
  IconClipboardList,
  IconDeviceMobile,
  IconFileAnalytics,
  IconFileDescription,
  IconEdit,
  IconUserFilled,
  IconCarFilled,
  IconKeyFilled,
  IconBellFilled,
  IconMessage,
  IconCar,
  IconReplaceUser,
} from "@tabler/icons-react";

/** Map friendly names to Tabler icon components */
export const Icons = {
  report: IconReport,
  alert: IconAlertHexagon,
  calendar: IconCalendarWeek,
  tasks: IconClipboardList,
  mobile: IconDeviceMobile,
  analytics: IconFileAnalytics,
  document: IconFileDescription,
  location: IconMapPin,
  user: IconUser,
  userFilled: IconUserFilled,
  users: IconUsers,
  password: IconLock,
  email: IconMail,
  logout: IconLogout,
  settings: IconSettings,
  home: IconHome,
  phone: IconPhone,
  // bell: IconBell,
  add: IconPlus,
  delete: IconTrash,
  editPencil: IconPencil,
  check: IconCheck,
  close: IconX,
  eye: IconEye,
  eyeOff: IconEyeOff,
  //   layers: IconLayers,
  map: IconMap,
  //   bullhorn: IconMegaphone, // alias to "megaphone"
  chart: IconChartLine,
  download: IconDownload,
  chevron: IconChevronRight,
  moon: IconMoon,
  dashboardIcon: IconLayoutDashboard,
  dashboardFilledIcon: IconLayoutDashboardFilled,
  map_pin: IconMapPin,
  message: IconMail,
  edit: IconEdit,
  car: IconCarFilled,
  key: IconKeyFilled,
  bell: IconBellFilled,
  messageBox: IconMessage,
  carOutline: IconCar,
  personReplace: IconReplaceUser,
} as const;

export type IconName = keyof typeof Icons;

export interface AppIconProps extends Omit<IconProps, "size" | "stroke"> {
  /** Key from Icons map */
  name: IconName;
  /** Icon size in px (Tabler default is 24) */
  size?: number;
  /** Stroke width (Tabler default is 2) */
  stroke?: number;
  className?: string;
  /** Accessible label override */
  ariaLabel?: string;
}

/** Unified icon component using Tabler icons */
export const AppIcon: React.FC<AppIconProps> = ({
  name,
  size = 18,
  stroke = 1.75,
  className,
  ariaLabel,
  ...rest
}) => {
  const Component = Icons[name];
  if (!Component) {
    console.warn(`Icon '${name}' not found`);
    return null;
  }
  return (
    <Component
      size={size}
      stroke={stroke}
      className={className}
      aria-label={ariaLabel ?? name}
      {...rest}
    />
  );
};
