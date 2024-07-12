import React from "react";
import { cn } from "@/lib/utils"; // Utility to combine classes

const Container = ({ className, children, ...props }) => {
  return (
    <div
      className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
