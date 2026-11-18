import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="layout w-4/5 p-5">
        <div className="layout__navbar">
          <Navbar />
        </div>

        {children}
      </div>
    </div>
  );
};
