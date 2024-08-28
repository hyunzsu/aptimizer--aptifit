"use client";

import Link from "next/link";
import { Input, Button, Loading } from "@/components";
import useLogin from "@/hooks/useLogin";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  const { phone, loading, handlePhoneChange, returnHome, goToResultPage } =
    useLogin();

  if (loading) {
    return <Loading text="사용자 정보를 확인하는 중입니다..." />;
  }

  return (
    <main className={s.LoginPage}>
      <div className={s.container}>
        <h2 className={s.title}>로그인</h2>
        <div className={s.inputContainer}>
          <Input
            label="휴대폰 번호"
            name="phone"
            placeholder="휴대폰을 입력해주세요. (ex: 01012345678)"
            value={phone}
            onChange={handlePhoneChange}
          />
          <Link className={s.link} href="register">
            회원가입
          </Link>
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
