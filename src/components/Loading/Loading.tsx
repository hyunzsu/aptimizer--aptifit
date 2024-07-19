import s from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={s.LoadingContainer}>
      <div className={s.spinner}></div>
      <p className={s.text}>데이터를 로딩 중입니다...</p>
    </div>
  );
};

export default Loading;
