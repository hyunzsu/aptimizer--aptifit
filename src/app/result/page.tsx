"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useRouter } from "next/navigation";
import Printer from "../../../public/svg/printer.svg";
import {
  DetailSection,
  MajorSection,
  SummarySection,
  KeywordSection,
} from "./_sections";
import { ResultLoading, Print } from "./_components";
import { submitResponses } from "@/function";
import { LayoutContainer, Button } from "@/components";
import s from "./ResultPage.module.css";

const ResultPage = () => {
  const [resultData, setResultData] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pageRef = useRef(null);

  useEffect(() => {
    const savedData = sessionStorage.getItem("bootcamp6");
    const resultData = sessionStorage.getItem("bootcamp7");

    const loadingData = async () => {
      setLoading(true);

      if (savedData) {
        const parsedData = JSON.parse(savedData);

        const submitData = await submitResponses(parsedData);
        sessionStorage.setItem("bootcamp7", JSON.stringify(submitData));
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

  const printResultPage = useReactToPrint({
    content: () => pageRef.current,
  });

  const handleClick = () => {
    sessionStorage.clear();
    router.push("/");
  };

  if (loading) {
    return <ResultLoading />;
  }

  if (!loading && Object.keys(resultData).length !== 0) {
    return (
      <main className={s.ResultPage} ref={pageRef}>
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
          <button className={s.print} onClick={printResultPage}>
            <Image src={Printer} alt="" width={24} height={24} />
          </button>
        </LayoutContainer>
        <div className={s.buttonContainer}>
          <Button type="button" onClick={handleClick}>
            완료
          </Button>
        </div>
      </main>
    );
  }
};

export default ResultPage;
