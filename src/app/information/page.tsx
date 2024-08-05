"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { initializeTest } from "@/function";
import { LayoutContainer, Button, Loading } from "@/components";
import Teach from "../../../public/svg/teach.svg";
import RightArrow from "../../../public/svg/arrow_right.svg";
import s from "./InformationPage.module.css";

const InformationPage = () => {
  const router = useRouter();

  // 클릭하면 테스트 데이터를 초기화시키고 `test/1`로 이동한다.
  const startTest = () => {
    // 2. 테스트 페이지로 이동
    router.push("/test/1");
  };

  return (
    <main className={s.InformationPage}>
      <LayoutContainer>
        <div className={s.informationPageContainer}>
          <div className={s.container}>
            <Image className={s.image} src={Teach} width={435} height={400} alt="설명하는 남자" />
            <div className={s.rightContainer}>
              <div className={s.textContainer}>
                <h2 className={s.title}>대학 전공 적성 검사란?</h2>
                <p className={s.description}>
                  <span className={s.bold}>대학 전공 적성 검사</span>는 우리나라 주요 4년제 대학의 135개 학과에 대한
                  정보를 바탕으로, AI가 여러분의 전공 적성을 분석해주는 도구입니다. 이 검사는 학문 프로파일 AI를
                  기반으로 피험자의 전공 적성을 진단해줍니다.
                </p>
                <p className={s.description}>
                  본 검사는 약 10분 동안 진행되며, 제시된 문항에 자신에게 해당하는 항목을 응답해주시면 됩니다. 검사
                  중간에 나오면 검사 기록이 유실될 수 있으니 주의해주시기 바랍니다.
                </p>
              </div>
              <div className={s.buttonContainer}>
                <Button onClick={startTest}>검사 시작</Button>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </main>
  );
};

export default InformationPage;
