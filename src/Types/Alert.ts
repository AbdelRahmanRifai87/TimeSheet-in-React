export interface Alert {
  type: string;
  id: string;
  title: string;
  message: string;
  severity: "high" | "medium" | "low";
  img: string | null;
}
