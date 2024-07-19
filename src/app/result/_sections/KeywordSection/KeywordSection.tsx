import Image from "next/image";
import Keyword from "../../../../../public/svg/keyword.svg";
import s from "./KeywordSection.module.css";

const KeywordSection = ({ resultData }) => {
  const { keywords } = resultData;

  return (
    <section className={s.KeywordSection}>
      <h3 className={s.title}>학과 선정 이유</h3>
      <div className={s.container}>
        <div className={s.keywordContainer}>
          <p className={s.description}>
            <span className={s.keyword}>역량:</span> {keywords?.strength}
          </p>
          <p className={s.description}>
            <span className={s.keyword}>흥미:</span> {keywords?.interest}
          </p>
          <p className={s.description}>
            <span className={s.keyword}>가치:</span> {keywords?.value}
          </p>
          <p className={s.description}>
            <span className={s.keyword}>개인 특성:</span> {keywords?.characteristic}
          </p>
          <p className={s.description}>
            <span className={s.keyword}>지식:</span> {keywords?.knowledge}
          </p>
        </div>
        <Image className={s.image} src={Keyword} width={400} height={270} alt="" />
      </div>
    </section>
  );
};

export default KeywordSection;
