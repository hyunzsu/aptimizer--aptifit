import Image from "next/image";
import Banner1 from "../../../../../public/svg/banner1.svg";
import Banner2 from "../../../../../public/svg/banner2.svg";
import Banner3 from "../../../../../public/svg/banner3.svg";
import Banner4 from "../../../../../public/svg/banner4.svg";
import Banner5 from "../../../../../public/svg/banner5.svg";
import s from "./CircleAnimation.module.css";

const CircleAnimation = () => {
  return (
    <div className={s.circle}>
      <div className={s.banner1}>
        <Image src={Banner1} alt="" fill />
      </div>
      <div className={s.banner2}>
        <Image src={Banner2} alt="" fill />
      </div>
      <div className={s.banner3}>
        <Image src={Banner3} alt="" fill />
      </div>
      <div className={s.banner4}>
        <Image src={Banner4} alt="" fill />
      </div>
      <div className={s.banner5}>
        <Image src={Banner5} alt="" fill />
      </div>
    </div>
  );
};

export default CircleAnimation;
