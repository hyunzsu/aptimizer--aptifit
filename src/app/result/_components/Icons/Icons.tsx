import Image from "next/image";
import Knowledge from "../../../../../public/svg/loading_knowledge.svg";
import Lawman from "../../../../../public/svg/lawman.svg";
import Mechanic from "../../../../../public/svg/mechanic.svg";
import Doctor from "../../../../../public/svg/doctor.svg";
import Artist from "../../../../../public/svg/artist.svg";
import s from "./Icons.module.css";

type TIcons = {
  type: string;
};

const Icons = ({ type }: TIcons) => {
  switch (type) {
    case "knowledge":
      return <Image src={Knowledge} alt="" width={100} height={100} />;
    case "interest":
      return <Image src={Doctor} alt="" width={100} height={100} />;
    case "strength":
      return <Image src={Lawman} alt="" width={100} height={100} />;
    case "characteristics":
      return <Image src={Mechanic} alt="" width={100} height={100} />;
    case "value":
      return <Image src={Artist} alt="" width={100} height={100} />;
    case "finish":
      return <div className={s.spinner}></div>;
  }
};

export default Icons;
