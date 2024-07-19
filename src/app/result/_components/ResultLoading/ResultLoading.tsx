"use client";

import { useState, useEffect } from "react";
import { LayoutContainer } from "@/components";
import { Icons } from "../";
import s from "./ResultLoading.module.css";

const ResultLoading = () => {
  const [icons, setIcons] = useState("knowledge");
  const [field, setField] = useState("지식을");
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (percentage < 100) {
      const timer = setTimeout(() => {
        setPercentage((prev) => Math.min(prev + 1, 100));
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [percentage]);

  useEffect(() => {
    switch (percentage) {
      case 20:
        setIcons("strength");
        setField("역량을");
        break; // 여기에 break 추가
      case 40:
        setIcons("characteristics");
        setField("개인 특성을");
        break; // 여기에 break 추가
      case 60:
        setIcons("interest");
        setField("흥미를");
        break; // 여기에 break 추가
      case 80:
        setIcons("value");
        setField("가치를");
        break; // 여기에 break 추가
      case 100:
        // 100%일 때의 처리 (필요한 경우)
        setIcons("finish");
        break;
    }
  }, [percentage]);

  if (percentage === 100) {
    return (
      <main className={s.ResultLoading}>
        <LayoutContainer>
          {/* 아이콘 */}
          <div className={s.finishContainer}>
            <Icons type={icons} />
          </div>
          <p className={s.description}>결과지를 준비 중입니다...</p>
        </LayoutContainer>
      </main>
    );
  }

  return (
    <main className={s.ResultLoading}>
      <LayoutContainer>
        {/* 아이콘 */}
        <div className={s.iconContainer}>
          <Icons type={icons} />
        </div>
        {/* 로딩바 */}
        <div className={s.loadingbarContainer}>
          <div className={s.loadingbarOuter}>
            <div className={s.loadingbarInner} style={{ width: `${percentage}%` }}></div>
          </div>
          <span className={s.percentage}>{percentage}%</span>
        </div>
        {/* 문구 */}
        <p className={s.description}>앱티봇이 {field} 분석 중 입니다...</p>
      </LayoutContainer>
    </main>
  );
};

export default ResultLoading;
