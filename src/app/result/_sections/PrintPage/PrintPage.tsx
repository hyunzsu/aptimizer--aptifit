"use client";

import s from "./PrintPage.module.css";

const PrintPage = ({ resultData, pageRef }) => {
  console.log(resultData);
  return (
    <div className={s.PrintPage} ref={pageRef}>
      <p className={s.title}>🤖 앱티핏 적성 검사</p>
      <div>
        <p className={s.sectionTitle}>나의 학과 적성 순위</p>
        <div className={s.rankCard}>
          <p className={s.rankTitle}>1. 교육학</p>
          <p className={s.rankDesc}>교육학은 교육의 원리와 방법을 연구하는 학과입니다.</p>
        </div>
        <div className={s.rankCard}>
          <p className={s.rankTitle}>2. 교육학</p>
          <p className={s.rankDesc}>교육학은 교육의 원리와 방법을 연구하는 학과입니다.</p>
        </div>
        <div className={s.rankCard}>
          <p className={s.rankTitle}>3. 교육학</p>
          <p className={s.rankDesc}>교육학은 교육의 원리와 방법을 연구하는 학과입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default PrintPage;
