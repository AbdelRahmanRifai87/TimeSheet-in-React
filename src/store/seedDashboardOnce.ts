// src/store/seedDashboardOnce.ts
"use client";
import { useDashboardStore } from "../store/dashboardStore";
import { useDashboardData } from "../store/dashboardData";
import { alertsData } from "../data/alerts";
import { blockoutsData } from "../data/blockouts";

export function seedDashboardOnce() {
  const KEY = "dashboard-seeded-v1";
  if (typeof window === "undefined") return;
  if (localStorage.getItem(KEY)) return;

  // 1) seed shared datasets
  const { setAlerts, setBlockouts } = useDashboardData.getState();
  setAlerts(alertsData);
  setBlockouts(blockoutsData);

  // 2) seed widget instances (no data attached)
  const { addWidget } = useDashboardStore.getState();
  addWidget("alerts", { title: "Staff License & Qualification Alerts" });
  addWidget("blockouts", { title: "Blockouts" });
  addWidget("alerts", { title: "Staff License & Qualification Alerts" });

  localStorage.setItem(KEY, "1");
}
