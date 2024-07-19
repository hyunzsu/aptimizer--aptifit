import { ReactNode } from "react";
import s from "./LayoutContainer.module.css";

type TLayoutContaienr = {
  children: ReactNode;
};

const LayoutContainer = ({ children }: TLayoutContaienr) => {
  return <div className={s.LayoutContainer}>{children}</div>;
};

export default LayoutContainer;
