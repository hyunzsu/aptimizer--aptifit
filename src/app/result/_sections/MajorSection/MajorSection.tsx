"use client";

import { useState } from "react";
import Image from "next/image";
import Chatbot from "../../../../../public/svg/chatbot.svg";

import { RankingCard } from "./_components";
import s from "./MajorSection.module.css";

const MajorSection = ({ resultData }) => {
  const [currentRank, setCurrentRank] = useState(0);
  const { major_title_1, major_title_2, major_title_3 } = resultData;
  const majors = [major_title_1, major_title_2, major_title_3];

  const handleClick = (rank) => {
    setCurrentRank(rank);
  };
  return (
    <section className={s.MajorSection}>
      <p className={s.title}>나의 학과 적성 순위</p>

      {/* <div className={s.imageContainer}>
        <Image src={Chatbot} alt="챗봇" width={300} height={280} />
      </div> */}
      <p className={s.description}>
        5대 적성 요소인 역량, 가치, 개인특성, 흥미, 지식을 종합하여 봤을 때 가장 적합한 학과는 다음과 같습니다.
      </p>
      <div className={s.majorsContainer}>
        {majors?.map((major, i) => {
          return <RankingCard key={`${i} ${major}`} title={major} rank={i} />;
        })}
      </div>
      {/* 모바일 */}
      <div className={s.majorsMobileContainer}>
        <div className={s.innerContainer}>
          {majors?.map((major, i) => {
            if (currentRank === i) {
              return <RankingCard key={`${i} ${major}`} title={major} rank={i} />;
            }
          })}
        </div>
        <div className={s.bullets}>
          <div className={`${s.bullet} ${currentRank === 0 ? s.active : ""}`} onClick={() => handleClick(0)}></div>
          <div className={`${s.bullet} ${currentRank === 1 ? s.active : ""}`} onClick={() => handleClick(1)}></div>
          <div className={`${s.bullet} ${currentRank === 2 ? s.active : ""}`} onClick={() => handleClick(2)}></div>
        </div>
      </div>
    </section>
  );
};

export default MajorSection;
