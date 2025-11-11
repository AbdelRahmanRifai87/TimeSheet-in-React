// src/types/dashboard.ts
import type { Layout, Layouts } from "react-grid-layout";

export type ResizeHandle = "s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne";

export interface Breakpoints {
  [key: string]: number;
  xlg: number;

  lg: number;
  md: number;
  sm: number;
  xs: number;
  xxs: number;
}

export type DataLabel = string; // open-ended for easy extension

export type WidgetSize = {
  w: number;
  h: number;
  minW: number;
  minH: number;
  maxH?: number;
};

export type WidgetCatalogEntry = {
  label: DataLabel; // unique type key (e.g., 'alerts')
  title: string; // human title
  defaultSize: WidgetSize; // default sizing constraints
  resizeHandles?: ResizeHandle[]; // optional handles per type
};

export type ItemsMap = Record<
  string,
  { label: DataLabel; title?: string; data?: any[] }
>;

export interface DashboardItem extends Layout {
  label: DataLabel;
  title?: string;
  data: any[];
  resizeHandles?: ResizeHandle[];
}
