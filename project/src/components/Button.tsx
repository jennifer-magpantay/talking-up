import React, { ForwardedRef, forwardRef } from "react";

interface ButtonProps {
  style?: string;
  type: "button" | "submit" | "reset";
  title?: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ style, type, title, icon, onClick }: ButtonProps) => {
  return (
    <button className={style} type={type} onClick={onClick}>
      <span aria-label={title}>{icon}</span>
      {title}
    </button>
  );
};
