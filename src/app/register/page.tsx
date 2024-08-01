"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button, Loading } from "@/components";
import s from "./RegisterPage.module.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // 휴대폰 형식 인증
  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^(010|011|016|017|018|019)-?\d{3,4}-?\d{4}$/;
    return phoneRegex.test(phoneNumber);
  };

  // 폼 제출
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || school === "" || phone === "") {
      alert("모든 필드를 채워주세요!");
      return;
    }

    if (!validatePhoneNumber(phone)) {
      alert("휴대폰 번호를 올바르게 입력하세요!");
      return;
    }

    // 회원가입 후 페이지1 데이터 세션 스토리지에 보관
    setLoading(true);
    const res = await registerUser();
    console.log(res);

    // 이미 등록된 사용자일 때
    if (res.authorization === false) {
      setLoading(false);
      alert("이미 등록된 사용자입니다!");
      router.push("/login");
      return;
    }

    sessionStorage.setItem("bootcamp1", JSON.stringify(res));

    // 유저 프로필 데이터 세션 스토리지에 보관
    sessionStorage.setItem("user", JSON.stringify({ name, school, phone }));

    // 페이지 이동
    router.push("/information");
  };

  // 이름
  const handleNameChange = (e) => {
    const input = e.target.value;
    const filteredInput = input.replace(/[0-9a-zA-Z]/g, "");
    setName(filteredInput);
  };

  // 학교
  const handleSchoolChange = (e) => {
    const input = e.target.value;

    const filteredInput = input.replace(/[0-9a-zA-Z]/g, "");
    setSchool(filteredInput);
  };

  // 휴대폰 번호
  const handlePhoneChange = (e) => {
    const input = e.target.value;

    // 휴대폰 번호 형식 필터링 (숫자와 하이픈만 허용)
    const filteredInput = input.replace(/[^0-9-]/g, "");
    setPhone(filteredInput);
  };

  // 회원가입
  const registerUser = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_INITIALIZE_BOOTCAMP}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, school, phone }),
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

  if (loading) {
    return <Loading text="회원 등록을 진행 중입니다..." />;
  }

  return (
    <main className={s.RegisterPage}>
      <div className={s.container}>
        <h2 className={s.title}>회원 등록</h2>
        <form className={s.form} onSubmit={handleFormSubmit}>
          <div className={s.inputContainer}>
            <Input
              label="이름"
              name="name"
              value={name}
              placeholder="이름을 입력해주세요 (ex: 김스누로)"
              onChange={handleNameChange}
            />
            <Input
              label="학교명"
              name="school"
              value={school}
              placeholder="학교명을 입력해주세요 (ex: 스누로중학교)"
              onChange={handleSchoolChange}
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
            <Button type="button" onClick={() => router.push("/")}>
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
