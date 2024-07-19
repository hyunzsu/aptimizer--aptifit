"use client";

import { useState, useEffect } from "react";
import { Quiz } from "../";

const Quizzes = ({ questions, responses, setResponses }) => {
  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    if (responses.length !== 0) {
      // isActive는 responses에서 가장 처음으로 0이 나오는 값이다.
      setIsActive(responses.indexOf(0));
    }
  }, [responses]);

  useEffect(() => {
    const activeElement = document.querySelector(".active");

    if (activeElement) {
      activeElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isActive]);

  return (
    <div>
      {questions?.map((question, index) => {
        return (
          <Quiz
            key={index}
            questionId={index}
            question={question}
            responses={responses}
            setResponses={setResponses}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
};

export default Quizzes;
