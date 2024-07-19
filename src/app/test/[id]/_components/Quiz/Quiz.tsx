"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import s from "./Quiz.module.css";

type TQuiz = {
  question: string;
  questionId: number;
  responses: number[];
  setResponses: any;
  isActive: any;
};

const Quiz = ({ questionId, question, responses, setResponses, isActive }: TQuiz) => {
  const [testData, setTestData] = useState({});
  const params = useParams();

  useEffect(() => {
    const savedData = sessionStorage.getItem(`bootcamp${params.id}`);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setTestData(parsedData);
    }
  }, []);

  // 점수 변경
  const handleInputChange = (e) => {
    const newResponses = [...responses]; //1. 응답 배열 복사
    newResponses[questionId] = parseInt(e.target.value); //2. 복사된 배열의 해당 인덱스의 값만 변경
    setResponses(newResponses); //3. responses 상태 업데이트

    //4. 세션 스토리지에 저장됐던 데이터와 객체 합성으로 업데이트
    const newSavedData = {
      ...testData,
      responses: newResponses,
    };

    sessionStorage.setItem(`bootcamp${params.id}`, JSON.stringify(newSavedData));
  };

  return (
    <div className={`${s.quiz} ${questionId === isActive ? "active" : "inactive"}`}>
      <p className={s.quizTitle}>{question}</p>
      <div className={s.quizChoiceContainer}>
        {[
          { id: "0", value: 1, label: "전혀 그렇지 않다" },
          { id: "1", value: 2, label: "그렇지 않다" },
          { id: "2", value: 3, label: "약간 그렇지 않다" },
          { id: "3", value: 4, label: "보통이다" },
          { id: "4", value: 5, label: "약간 그렇다" },
          { id: "5", value: 6, label: "그렇다" },
          { id: "6", value: 7, label: "매우 그렇다" },
        ].map((item) => (
          <div key={item.id} className={s.quizChoice}>
            <input
              className={s.quizRadio}
              type="radio"
              id={`${question}-${item.id}`}
              name={question}
              value={item.value}
              checked={responses[questionId] == item.value}
              onChange={handleInputChange}
            />
            <label className={s.quizRadioTitle} htmlFor={`${question}-${item.id}`}>
              {item.label}
            </label>
          </div>
        ))}
      </div>
      <p className={s.radioLabelMobile}>
        <span>전혀 그렇지 않다</span>
        <span>매우 그렇다</span>
      </p>
    </div>
  );
};

export default Quiz;
