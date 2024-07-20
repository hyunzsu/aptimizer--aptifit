import Image from "next/image";
import Keyword from "../../../../../public/svg/keyword.svg";
import Strength from "../../../../../public/svg/capability.svg";
import Knowledge from "../../../../../public/svg/knowledge.svg";
import Interest from "../../../../../public/svg/interest.svg";
import Value from "../../../../../public/svg/value.svg";
import Characteristic from "../../../../../public/svg/characteristic.svg";
import s from "./KeywordSection.module.css";

const KeywordSection = ({ resultData }) => {
  const { keywords } = resultData;
  return (
    <section className={s.KeywordSection}>
      <h3 className={s.title}>5대 역량 분석</h3>
      <div className={s.container}>
        <div className={s.keywordContainer}>
          <div className={s.description}>
            <div className={s.imageContainer}>
              <Image className={s.icon} src={Interest} alt="흥미" width={20} height={20} />
              <span className={s.keyword}>흥미</span>
            </div>
            <p>{keywords?.interest}</p>
          </div>
          <div className={s.description}>
            <div className={s.imageContainer}>
              <Image className={s.icon} src={Strength} alt="역량" width={20} height={20} />
              <span className={s.keyword}>역량</span>
            </div>
            <p>{keywords?.strength}</p>
          </div>
          <div className={s.description}>
            <div className={s.imageContainer}>
              <Image className={s.icon} src={Characteristic} alt="개인특성" width={20} height={20} />
              <span className={s.keyword}>개인특성</span>
            </div>
            <p>{keywords?.characteristic}</p>
          </div>
          <div className={s.description}>
            <div className={s.imageContainer}>
              <Image className={s.icon} src={Value} alt="가치" width={20} height={20} />
              <span className={s.keyword}>가치</span>
            </div>
            <p>{keywords?.value}</p>
          </div>
          <div className={s.description}>
            <div className={s.imageContainer}>
              <Image className={s.icon} src={Knowledge} alt="지식" width={20} height={20} />
              <span className={s.keyword}>지식</span>
            </div>
            <p>{keywords?.knowledge}</p>
          </div>
        </div>
        <Image className={s.image} src={Keyword} width={400} height={270} alt="" />
      </div>
    </section>
  );
};

export default KeywordSection;
