"use client";

import { useState, useEffect } from "react";
import { DetailSection, MajorSection, SummarySection, KeywordSection } from "./_sections";
import { ResultLoading } from "./_components";
import { submitResponses } from "@/function";
import { LayoutContainer } from "@/components";
import s from "./ResultPage.module.css";

const ResultPage = () => {
  const [resultData, setResultData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedData = sessionStorage.getItem("bootcamp9");
    const resultData = sessionStorage.getItem("bootcamp10");

    const loadingData = async () => {
      setLoading(true);

      if (savedData) {
        const parsedData = JSON.parse(savedData);

        const submitData = await submitResponses(parsedData);
        sessionStorage.setItem("bootcamp10", JSON.stringify(submitData));
        setResultData(submitData);

        setTimeout(() => {
          setLoading(false);
        }, 8000);
      }
    };

    if (!resultData) {
      loadingData();
    } else {
      const parsedData = JSON.parse(resultData);
      setResultData(parsedData);
    }
  }, []);

  if (loading) {
    return <ResultLoading />;
  }

  if (!loading && Object.keys(resultData).length !== 0) {
    return (
      <main className={s.ResultPage}>
        <LayoutContainer>
          <h1 className={s.title}>🤖 앱티핏 적성 검사</h1>
          <p className={s.warning}>*결과지는 1순위만 제공됩니다</p>
          {/* 1. 결과 섹션 */}
          <MajorSection resultData={resultData} />
          {/* 2. 학과 설명 섹션 */}
          <SummarySection resultData={resultData} />
          {/* 3. 키워드 섹션 */}
          <KeywordSection resultData={resultData} />
          {/* 4. 세부 분석 섹션 */}
          <DetailSection resultData={resultData} />
        </LayoutContainer>
      </main>
    );
  }
};

export default ResultPage;
