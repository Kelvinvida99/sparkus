import { ReactNode } from "react";

export interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  alert?: boolean;
  active?: boolean;
}