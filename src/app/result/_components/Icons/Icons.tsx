import Image from "next/image";
import Knowledge from "../../../../../public/svg/loading_knowledge.svg";
import Capability from "../../../../../public/svg/loading_capability.svg";
import Characteristics from "../../../../../public/svg/loading_characteristics.svg";
import Interest from "../../../../../public/svg/loading_interest.svg";
import Value from "../../../../../public/svg/loading_value.svg";
import s from "./Icons.module.css";

type TIcons = {
  type: string;
};

const Icons = ({ type }: TIcons) => {
  switch (type) {
    case "knowledge":
      return <Image src={Knowledge} alt="" width={100} height={100} />;
    case "interest":
      return <Image src={Interest} alt="" width={100} height={100} />;
    case "strength":
      return <Image src={Capability} alt="" width={100} height={100} />;
    case "characteristics":
      return <Image src={Characteristics} alt="" width={100} height={100} />;
    case "value":
      return <Image src={Value} alt="" width={100} height={100} />;
    case "finish":
      return <div className={s.spinner}></div>;
  }
};

export default Icons;
