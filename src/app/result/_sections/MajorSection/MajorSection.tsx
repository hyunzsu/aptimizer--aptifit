import Image from "next/image";
import Chatbot from "../../../../../public/svg/chatbot.svg";

import s from "./MajorSection.module.css";

const MajorSection = ({ resultData }) => {
  const { major_title_1, major_title_2, major_title_3 } = resultData;
  return (
    <section className={s.MajorSection}>
      <p className={s.title}>앱티핏 적성검사 결과</p>
      <div className={s.imageContainer}>
        <Image src={Chatbot} alt="챗봇" width={300} height={280} />
      </div>
      <p className={s.description}>
        5대 적성 요소인 역량, 가치, 개인특성, 흥미, 지식을 종합하여 봤을 때
        <br />
        가장 적합한 학과는{" "}
        <span className={s.major}>
          1. {major_title_1} / 2. {major_title_2} / 3. {major_title_3}
        </span>{" "}
        입니다.
      </p>
    </section>
  );
};

export default MajorSection;
