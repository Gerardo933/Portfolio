export interface SidebarProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}
export interface IDivider {
  variant?: "basic" | "gradient" | "glow" | "dots";
}
