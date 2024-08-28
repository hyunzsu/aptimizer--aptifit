"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { validatePhoneNumber } from "@/utils/validation";
import { checkUser } from "@/services/api";

const useLogin = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const filteredInput = input.replace(/[^0-9-]/g, "");
    setPhone(filteredInput);
  };

  const returnHome = () => {
    router.push("/");
  };

  const goToResultPage = async () => {
    if (phone === "") {
      alert("휴대폰 번호를 입력해주세요");
      return;
    }

    if (!validatePhoneNumber(phone)) {
      alert("휴대폰 번호를 올바르게 입력하세요!");
      return;
    }

    setLoading(true);
    const res = await checkUser(phone);

    if (res.authorization === false) {
      setLoading(false);
      alert("등록되지 않은 사용자입니다!");
      return;
    }

    if (res.page && res.questions) {
      sessionStorage.setItem(`bootcamp${res.page}`, JSON.stringify(res));
      router.push(`test/${res.page}`);
      return;
    }

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
