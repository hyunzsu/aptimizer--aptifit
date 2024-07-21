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
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // 회원가입 후 페이지1 데이터 세션 스토리지에 보관
    const register = await registerUser();
    sessionStorage.setItem("bootcamp1", JSON.stringify(register));

    // 유저 프로필 데이터 세션 스토리지에 보관
    sessionStorage.setItem("user", JSON.stringify(formData));

    // 페이지 이동
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

  // 회원가입
  const registerUser = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_INITIALIZE_BOOTCAMP}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
