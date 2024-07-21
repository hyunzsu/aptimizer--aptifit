"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "@/components";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // 휴대폰 번호
  const handlePhoneChange = (e) => {
    const input = e.target.value;

    // 휴대폰 번호 형식 필터링 (숫자와 하이픈만 허용)
    const filteredInput = input.replace(/[^0-9-]/g, "");
    setPhone(filteredInput);
  };

  // 휴대폰 형식 인증
  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^(010|011|016|017|018|019)-?\d{3,4}-?\d{4}$/;
    return phoneRegex.test(phoneNumber);
  };

  // 메인 페이지로 귀환
  const returnHome = () => {
    router.push("/");
  };

  // 고유 번호 인증
  const goToResultPage = async () => {
    if (phone === "") {
      alert("휴대폰 번호를 입력해주세요");
      return;
    }

    if (!validatePhoneNumber(phone)) {
      alert("휴대폰 번호를 올바르게 입력하세요!");
      return;
    }

    // 회원 확인
    setLoading(true);
    const res = await checkUser();

    if (res.authorization === false) {
      setLoading(false);
      alert("결과지 데이터가 없습니다!");
      return;
    }
    setLoading(false);
    sessionStorage.setItem("bootcamp10", JSON.stringify(res));
    router.push("/result");
  };

  // 회원정보확인
  const checkUser = async () => {
    const data = { phone: phone };

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
            placeholder="휴대폰을 입력해주세요. (ex: 01012345678)"
            value={phone}
            onChange={handlePhoneChange}
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
