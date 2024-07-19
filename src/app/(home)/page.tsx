import Link from "next/link";
import { CircleAnimation } from "./_components";
import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main className={s.HomePage}>
      {/* 1. 제목 */}
      <div className={s.titleContainer}>
        <h1 className={s.title}>앱티핏 대학 전공 적성 검사</h1>
        <p className={s.subtitle}>너의 전공을 찾아봐</p>
        <Link href="/information" className={s.button}>
          시작하기
        </Link>
      </div>

      {/* 2. 애니메이션 */}
      <CircleAnimation />
    </main>
  );
}
