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
    const savedData = sessionStorage.getItem("6");
    const resultData = sessionStorage.getItem("7");

    const loadingData = async () => {
      setLoading(true);

      if (savedData) {
        const parsedData = JSON.parse(savedData);

        const submitData = await submitResponses(parsedData);
        sessionStorage.setItem("7", JSON.stringify(submitData));
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
