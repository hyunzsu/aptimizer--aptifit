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
    setPhone(e.target.value);
  };

  // 고유 번호 인증
  const handleClick = () => {
    const authentication = false;

    if (!authentication) {
      alert("고유 번호를 발견하지 못했습니다!");
      return;
    }

    router.push("/result");
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
          <Button onClick={handleClick}>다음</Button>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
