"use client";

import { useState, useEffect } from "react";
import s from "./LoginPage.module.css";
import { LayoutContainer, Input, Button } from "@/components";

const LoginPage = () => {
  const [phone, setPhone] = useState("");

  const handleInputChange = (e) => {
    setPhone(e.target.value);
  };

  const handleClick = () => {
    console.log(phone);
  };

  return (
    <main className={s.LoginPage}>
      <LayoutContainer>
        <h2 className={s.title}>내 결과지 확인하기</h2>
        <div className={s.inputContainer}>
          <Input
            label="고유 번호"
            name="phone"
            placeholder="고유 번호를 입력해주세요."
            value={phone}
            onChange={handleInputChange}
          />
        </div>
        <div className={s.buttonContainer}>
          <Button onClick={handleClick}>다음</Button>
        </div>
      </LayoutContainer>
    </main>
  );
};

export default LoginPage;
