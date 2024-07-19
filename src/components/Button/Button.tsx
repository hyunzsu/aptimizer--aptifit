"use client";

import { ReactNode } from "react";
import s from "./Button.module.css";

type TButton = {
  type?: "button" | "submit";
  children: ReactNode;
  onClick?: any;
};

const Button = ({ children, onClick, type = "button" }: TButton) => {
  return (
    <button className={s.Button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
