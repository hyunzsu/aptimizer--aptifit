"use client";

import { LinkButton, Button } from "@/components";
import { CircleAnimation } from "./_components";
import s from "./HomePage.module.css";

const HomePage = () => {
  // 결과지로 바로 이동
  const handleClick = () => {
    console.log("click");
  };

  return (
    <main className={s.HomePage}>
      {/* 1. 제목 */}
      <div className={s.titleContainer}>
        <h1 className={s.title}>앱티핏 대학 전공 적성 검사</h1>
        <p className={s.subtitle}>너의 전공을 찾아봐</p>
        <div className={s.buttonContainer}>
          <LinkButton href="/information" label="시작하기" />
          <Button onClick={handleClick}>결과 확인</Button>
        </div>
      </div>

      {/* 2. 애니메이션 */}
      <CircleAnimation />
    </main>
  );
};

export default HomePage;
