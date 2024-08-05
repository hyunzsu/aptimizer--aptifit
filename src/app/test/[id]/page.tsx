"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { LayoutContainer, Button, Loading } from "@/components";
import { ProgressBar, Quizzes, QuizTitle } from "./_components";
import { submitResponses } from "@/function";
import s from "./TestPage.module.css";

const TestPage = () => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const savedData = sessionStorage.getItem(`bootcamp${params.id}`);

    if (savedData) {
      const { questions, responses } = JSON.parse(savedData);
      setQuestions(questions);
      setResponses(responses);
    }
  }, []);

  // 폼 유효성 검증
  const formValidation = () => {
    const savedData = sessionStorage.getItem(`bootcamp${params.id}`);

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      const { responses } = parsedData;

      const hasZero = responses.includes(0);

      if (hasZero) {
        return false;
      } else {
        return true;
      }
    }
  };

  // 다음 페이지로 돌아가기
  const goToNextPage = async () => {
    const nextPage = Number(params.id) + 1;
    const savedData = sessionStorage.getItem(`bootcamp${params.id}`);

    // 풀지않은 문제가 있다면 통과 X
    if (!formValidation()) {
      alert("아직 풀지 않은 문제가 있습니다!");
      return;
    }

    // 10 페이지라면 바로 결과지로 페이지 이동
    if (nextPage === 7) {
      sessionStorage.removeItem("bootcamp10");
      router.push("/result");
      return;
    }

    // 7 페이지라면 바로 결과지로 페이지 아니라면
    setLoading(true);

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      const submitData = await submitResponses(parsedData);
      sessionStorage.setItem(`bootcamp${nextPage}`, JSON.stringify(submitData));

      router.push(`/test/${nextPage}`);

      setLoading(false);
    }
  };

  if (loading) {
    return <Loading text="데이터를 준비 중입니다..." />;
  }

  return (
    <main className={s.TestPage}>
      <LayoutContainer>
        {/* 1. 제목 */}
        <div className={s.titleContainer}>
          <QuizTitle />
        </div>

        {/* 2. 진행바 */}
        {/* <div className={s.progressBarContainer}>
          <ProgressBar responses={responses} />
        </div> */}

        {/* 3. 퀴즈 */}
        <div className={s.quizContainer}>
          <Quizzes questions={questions} responses={responses} setResponses={setResponses} />
        </div>

        {/* 4. 버튼 */}
        <div className={s.buttonContainer}>
          <Button onClick={goToNextPage}>다음</Button>
        </div>
      </LayoutContainer>
    </main>
  );
};

export default TestPage;
