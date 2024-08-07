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
              <Image
                className={s.icon}
                src={Interest}
                alt="흥미"
                width={20}
                height={20}
              />
              <span className={s.keyword}>흥미</span>
            </div>
            <p>{keywords?.interest}</p>
          </div>
          <div className={s.description}>
            <div className={s.imageContainer}>
              <Image
                className={s.icon}
                src={Strength}
                alt="역량"
                width={20}
                height={20}
              />
              <span className={s.keyword}>역량</span>
            </div>
            <p>{keywords?.strength}</p>
          </div>
          <div className={s.description}>
            <div className={s.imageContainer}>
              <Image
                className={s.icon}
                src={Characteristic}
                alt="개인특성"
                width={20}
                height={20}
              />
              <span className={s.keyword}>개인특성</span>
            </div>
            <p>{keywords?.characteristic}</p>
          </div>
          <div className={s.description}>
            <div className={s.imageContainer}>
              <Image
                className={s.icon}
                src={Value}
                alt="가치"
                width={20}
                height={20}
              />
              <span className={s.keyword}>가치</span>
            </div>
            <p>{keywords?.value}</p>
          </div>
          <div className={s.description}>
            <div className={s.imageContainer}>
              <Image
                className={s.icon}
                src={Knowledge}
                alt="지식"
                width={20}
                height={20}
              />
              <span className={s.keyword}>지식</span>
            </div>
            <p>{keywords?.knowledge}</p>
          </div>
        </div>
        <Image
          className={s.image}
          src={Keyword}
          width={400}
          height={270}
          alt=""
        />
      </div>

      {/* 프린트 */}
      <div className={s.printContainer}>
        <div className={s.printImgContainer}>
          <Image src={Knowledge} alt="" width={12} height={12} />
          <span>지식</span>
        </div>
        <div className={s.printDescContainer}>{keywords?.knowledge}</div>
      </div>
      <div className={s.printContainer}>
        <div className={s.printImgContainer}>
          <Image src={Strength} alt="" width={12} height={12} />
          <span>역량</span>
        </div>
        <div className={s.printDescContainer}>{keywords?.strength}</div>
      </div>
      <div className={s.printContainer}>
        <div className={s.printImgContainer}>
          <Image src={Interest} alt="" width={12} height={12} />
          <span>흥미</span>
        </div>
        <div className={s.printDescContainer}>{keywords?.interest}</div>
      </div>
      <div className={s.printContainer}>
        <div className={s.printImgContainer}>
          <Image src={Value} alt="" width={12} height={12} />
          <span>가치</span>
        </div>
        <div className={s.printDescContainer}>{keywords?.value}</div>
      </div>
      <div className={s.printContainer}>
        <div className={s.printImgContainer}>
          <Image src={Characteristic} alt="" width={12} height={12} />
          <span>개인특성</span>
        </div>
        <div className={s.printDescContainer}>{keywords?.characteristic}</div>
      </div>
    </section>
  );
};

export default KeywordSection;
