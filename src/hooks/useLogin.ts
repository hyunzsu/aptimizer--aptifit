"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { validatePhoneNumber } from "@/utils/validation";
import { checkUser } from "@/services/api";

const useLogin = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // 휴대폰 번호
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    // 휴대폰 번호 형식 필터링 (숫자와 하이픈만 허용)
    const filteredInput = input.replace(/[^0-9-]/g, "");
    setPhone(filteredInput);
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

    // 휴대폰 번호 유효성 검사
    if (!validatePhoneNumber(phone)) {
      alert("휴대폰 번호를 올바르게 입력하세요!");
      return;
    }

    // 사용자 화인
    setLoading(true);
    // 사용자 확인 API 호출
    const res = await checkUser(phone);

    // 1. 사용자 정보가 없을 경우
    if (res.authorization === false) {
      setLoading(false);
      alert("등록되지 않은 사용자입니다!");
      return;
    }

    // 2. 중간에 나온 사용자인 경우
    if (res.page && res.questions) {
      sessionStorage.setItem(`bootcamp${res.page}`, JSON.stringify(res));
      router.push(`test/${res.page}`);
      return;
    }

    // 3. 결과지가 있는 경우
    sessionStorage.setItem("bootcamp7", JSON.stringify(res));
    router.push("/result");
  };

  return {
    phone,
    loading,
    handlePhoneChange,
    returnHome,
    goToResultPage,
  };
};

export default useLogin;
