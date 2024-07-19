"use client";

import { ReactNode } from "react";
import s from "./Button.module.css";

type TButton = {
  children: ReactNode;
  onClick: any;
};

const Button = ({ children, onClick }: TButton) => {
  return (
    <button className={s.Button} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
