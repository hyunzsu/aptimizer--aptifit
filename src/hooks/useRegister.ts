"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { validatePhoneNumber } from "@/utils/validation";
import { registerUser } from "@/services/api";

const useRegister = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // 이름
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredInput = e.target.value.replace(/[0-9a-zA-Z]/g, "");
    setName(filteredInput);
  };

  // 휴대폰 번호
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 휴대폰 번호 형식 필터링 (숫자와 하이픈만 허용)
    const filteredInput = e.target.value.replace(/[^0-9-]/g, "");
    setPhone(filteredInput);
  };

  // 폼 제출
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (name === "" || phone === "") {
      alert("모든 필드를 채워주세요!");
      return;
    }

    if (!validatePhoneNumber(phone)) {
      alert("휴대폰 번호를 올바르게 입력하세요!");
      return;
    }

    // 회원가입 후 페이지1 데이터 세션 스토리지에 보관
    setLoading(true);
    try {
      const res = await registerUser(name, phone);

      // 이미 등록된 사용자일 때
      if (res.authorization === false) {
        alert("이미 등록된 사용자입니다!");
        router.push("/login");
        return;
      }

      sessionStorage.setItem("bootcamp1", JSON.stringify(res));
      // 유저 프로필 데이터 세션 스토리지에 보관
      sessionStorage.setItem("user", JSON.stringify({ name, phone }));
      // 페이지 이동
      router.push("/information");
    } catch (error) {
      console.error("Error:", error);
      alert("등록 중 오류가 발생했습니다. 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    router.push("/");
  };

  return {
    name,
    phone,
    loading,
    handleNameChange,
    handlePhoneChange,
    handleSubmit,
    goBack,
  };
};

export default useRegister;
