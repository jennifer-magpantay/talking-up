import React from "react";

interface Props {
  style?: string;
  type: "button" | "submit" | "reset";
  title?: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ style, type, title, icon, onClick }: Props) => {
  return (
    <button className={style} type={type} onClick={onClick}>
      <span>{icon}</span>
      {title}
    </button>
  );
};
