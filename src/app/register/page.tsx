"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LayoutContainer, Input, Button } from "@/components";
import s from "./RegisterPage.module.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    phone: "",
  });

  const router = useRouter();

  // 폼 제출
  const handleFormSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem("user", JSON.stringify(formData));

    router.push("/information");
  };

  // 인풋 입력값 업데이트
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <main className={s.RegisterPage}>
      <div className={s.container}>
        <h2 className={s.title}>회원 등록</h2>
        <form className={s.form} onSubmit={handleFormSubmit}>
          <div className={s.inputContainer}>
            <Input
              label="이름"
              name="name"
              value={formData.name}
              placeholder="이름을 입력해주세요"
              onChange={handleInputChange}
            />
            <Input
              label="학교명"
              name="school"
              value={formData.school}
              placeholder="학교명을 입력해주세요"
              onChange={handleInputChange}
            />
            <Input
              label="휴대폰"
              name="phone"
              value={formData.phone}
              placeholder="번호를 입력해주세요"
              onChange={handleInputChange}
            />
          </div>
          <div className={s.buttonContainer}>
            <Button type="submit">등록</Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
