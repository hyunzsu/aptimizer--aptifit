import { LinkButton } from "@/components";
import { CircleAnimation } from "./_components";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={s.HomePage}>
      {/* 1. 제목 */}
      <div className={s.titleContainer}>
        <h1 className={s.title}>에듀 프리미엄 체험판</h1>
        <div className={s.buttonContainer}>
          <LinkButton href="/login" label="시작하기" />
        </div>
      </div>

      {/* 2. 애니메이션 */}
      <CircleAnimation />
    </main>
  );
};

export default HomePage;
