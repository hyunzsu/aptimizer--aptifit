import Image from "next/image";
import { useParams } from "next/navigation";
import Value from "../../../../../../public/svg/value.svg";
import Interest from "../../../../../../public/svg/interest.svg";
import Knowledge from "../../../../../../public/svg/knowledge.svg";
import Capability from "../../../../../../public/svg/capability.svg";
import Characteristic from "../../../../../../public/svg/characteristic.svg";
import s from "./QuizTitle.module.css";

const QuizTitle = () => {
  const params = useParams();

  switch (params.id) {
    // 개인특성
    case "1":
      return (
        <div className={s.QuizTitle}>
          <div className={s.titleContainer}>
            <Image className={s.icon} src={Characteristic} alt="개인특성" width={20} height={20} />
            <p className={s.category}>개인 특성</p>
          </div>
          <p className={s.title}>Q1. 본인이 다음과 같은 특성을 가지고 있다고 생각합니까?</p>
        </div>
      );
    // 역량
    case "2":
      return (
        <div className={s.QuizTitle}>
          <div className={s.titleContainer}>
            <Image className={s.icon} src={Capability} alt="역량" width={20} height={20} />
            <p className={s.category}>역량</p>
          </div>
          <p className={s.title}>Q2. 본인이 다음과 같은 능력을 얼마나 갖추고 있다고 생각합니까?</p>
        </div>
      );
    // 가치
    case "3":
      return (
        <div className={s.QuizTitle}>
          <div className={s.titleContainer}>
            <Image className={s.icon} src={Value} alt="가치" width={20} height={20} />
            <p className={s.category}>가치</p>
          </div>
          <p className={s.title}>Q3. 다음과 같은 가치를 추구하는 것이 중요하다고 생각합니까?</p>
        </div>
      );
    // 흥미1
    case "4":
      return (
        <div className={s.QuizTitle}>
          <div className={s.titleContainer}>
            <Image className={s.icon} src={Interest} alt="흥미" width={20} height={20} />
            <p className={s.category}>흥미</p>
          </div>
          <p className={s.title}>Q4. 다음과 같은 내용에 관심과 흥미가 있습니까?</p>
        </div>
      );
    // 흥미2
    case "5":
      return (
        <div className={s.QuizTitle}>
          <div className={s.titleContainer}>
            <Image className={s.icon} src={Interest} alt="흥미" width={20} height={20} />
            <p className={s.category}>흥미</p>
          </div>
          <p className={s.title}>Q5. 다음과 같은 내용에 관심과 흥미가 있습니까?</p>
        </div>
      );
    // 지식
    case "6":
      return (
        <div className={s.QuizTitle}>
          <div className={s.titleContainer}>
            <Image className={s.icon} src={Knowledge} alt="지식" width={20} height={20} />
            <p className={s.category}>지식</p>
          </div>
          <p className={s.title}>Q6. 다음과 같은 지식의 내용을 알고 있습니까?</p>
        </div>
      );
  }
};

export default QuizTitle;
