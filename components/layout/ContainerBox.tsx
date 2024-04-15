import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerBoxProps {
  children: React.ReactNode;
  className?: string;
  image?: string;
  type?: "card" | "frame";
  onClick?: () => void;
}

const ContainerBox = ({
  children,
  className,
  type = "frame",
  onClick,
}: ContainerBoxProps) => {
  return (
    <div
      className={twMerge(
        `
        bg-secondary-bg-light
        dark:bg-secondary-bg-dark
        rounded-xl
        sm:rounded-lg
        `,
        type === "frame" ? "sm:p-6 p-4" : "sm:p-4",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ContainerBox;
