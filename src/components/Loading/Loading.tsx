import s from "./Loading.module.css";

const Loading = ({ text }) => {
  return (
    <div className={s.LoadingContainer}>
      <div className={s.spinner}></div>
      <p className={s.text}>{text}</p>
    </div>
  );
};

export default Loading;
