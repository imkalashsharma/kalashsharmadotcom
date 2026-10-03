import type { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex justify-center bg-amber-400">
      <div className="w-full sm:w-11/12 md:w-10/12 lg:w-6/12 bg-red-400">
        {children}
      </div>
    </div>
  );
};
