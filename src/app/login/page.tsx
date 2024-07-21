"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LayoutContainer, Input, Button } from "@/components";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  // input 입력값
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (validatePhoneNumber(inputValue) || inputValue === "") {
      setPhone(e.target.value);
    }
  };

  // 메인 페이지로 귀환
  const returnHome = () => {
    router.push("/");
  };

  // 휴대폰 유효성 검사
  const validatePhoneNumber = (phoneNumber) => {
    const validChars = /^[0-9-]+$/;
    return validChars.test(phoneNumber);
  };

  // 고유 번호 인증
  const goToResultPage = async () => {
    if (phone === "") {
      alert("필드에 값을 입력해주세요");
      return;
    }

    // 회원 확인
    const res = await checkUser();

    if (res.authorization === false) {
      alert("결과지 데이터가 없습니다!");
      return;
    }

    sessionStorage.setItem("bootcamp10", JSON.stringify(res));
    router.push("/result");
  };

  // 회원정보확인
  const checkUser = async () => {
    const data = { phone: phone };
    console.log(data);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_LOGIN_BOOTCAMP}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // 응답이 성공적인지 확인
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      // 응답 데이터를 JSON 형태로 변환
      const res = await response.json();
      return res;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className={s.LoginPage}>
      <div className={s.container}>
        <h2 className={s.title}>내 결과지 확인하기</h2>
        <div className={s.inputContainer}>
          <Input
            label="휴대폰 번호"
            name="phone"
            placeholder="휴대폰 번호를 입력해주세요."
            value={phone}
            onChange={handleInputChange}
          />
        </div>
        <div className={s.buttonContainer}>
          <Button onClick={returnHome}>이전</Button>
          <Button onClick={goToResultPage}>다음</Button>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
