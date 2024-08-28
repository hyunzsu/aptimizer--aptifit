"use client";

import { Input, Button, Loading } from "@/components";
import useRegister from "@/hooks/useRegister";
import s from "./RegisterPage.module.css";

const RegisterPage = () => {
  const {
    name,
    phone,
    loading,
    handleNameChange,
    handlePhoneChange,
    handleSubmit,
    goBack,
  } = useRegister();

  if (loading) {
    return <Loading text="사용자 등록을 진행 중입니다..." />;
  }

  return (
    <main className={s.RegisterPage}>
      <div className={s.container}>
        <h2 className={s.title}>사용자 등록</h2>
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.inputContainer}>
            <Input
              label="이름"
              name="name"
              value={name}
              placeholder="이름을 입력해주세요 (ex: 김예빈)"
              onChange={handleNameChange}
            />
            <Input
              label="휴대폰"
              name="phone"
              value={phone}
              placeholder="휴대폰을 입력해주세요 (ex: 01012345678)"
              onChange={handlePhoneChange}
            />
          </div>
          <div className={s.buttonContainer}>
            <Button type="button" onClick={goBack}>
              이전
            </Button>
            <Button type="submit">등록</Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
