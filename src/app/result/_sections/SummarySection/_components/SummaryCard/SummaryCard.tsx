import s from "./SummaryCard.module.css";

type TSummaryCard = {
  type: "definition" | "ideal" | "courses" | "specifics";
  majorData: any;
};

const SummaryCard = ({ type, majorData }: TSummaryCard) => {
  switch (type) {
    case "definition":
      return (
        <div className={`${s.SummaryCard} ${s.definition}`}>
          <p className={s.title}>🏫 전공 설명</p>
          <p className={s.description}>{majorData.definition}</p>
        </div>
      );

    case "ideal":
      return (
        <div className={`${s.SummaryCard} ${s.ideal}`}>
          <p className={s.title}>🧑‍🎓 인재상</p>
          <p className={s.description}>{majorData.idol}</p>
        </div>
      );
    case "courses":
      return (
        <div className={`${s.SummaryCard} ${s.courses}`}>
          <p className={s.title}>💯 세부 전공</p>
          <p className={s.description}>{majorData.courses}</p>
        </div>
      );
    case "specifics":
      return (
        <div className={`${s.SummaryCard} ${s.specifics}`}>
          <p className={s.title}>📖 배우는 내용</p>
          <p className={s.description}>{majorData.learn}</p>
        </div>
      );
  }
};

export default SummaryCard;
