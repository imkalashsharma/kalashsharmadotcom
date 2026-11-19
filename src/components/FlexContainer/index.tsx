import type { ReactNode } from "react";

export const FlexContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flexContainer flex items-center justify-center">
      {children}
    </div>
  );
};
