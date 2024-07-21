import s from "./Card.module.css";

const Card = ({ field, score, content }) => {
  return (
    <div className={s.Card}>
      <div className={s.topContainer}>
        <h3 className={s.title}>{field}</h3>
        <p className={s.score}>{score}점</p>
      </div>
      <p className={s.description}>{content}</p>
    </div>
  );
};

export default Card;
