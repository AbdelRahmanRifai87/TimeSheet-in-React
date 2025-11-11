export interface ShiftStatusProps {
  id: string;
  name: string;
  date: string;
  location: string;
  status: "accepted" | "unaccepted" | "declined";
}
