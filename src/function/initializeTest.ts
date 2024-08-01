const initializeTest = async () => {
  const userData = sessionStorage.getItem("user");

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_INITIALIZE_HANLA}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userData,
    });

    if (!res.ok) {
      console.error("😢 initialize는 성공했는데 문제가 생겼습니다!");
    }
    return await res.json();
  } catch (error) {
    console.error("😢 initialize를 실패했습니다!");
  }
};

export default initializeTest;
