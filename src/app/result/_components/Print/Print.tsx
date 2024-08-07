"use client";

import Image from "next/image";
import Printer from "../../../../../public/svg/printer.svg";
import s from "./Print.module.css";

const Print = () => {
  return (
    <button className={s.Print}>
      <Image src={Printer} alt="" />
    </button>
  );
};

export default Print;
