// 로그인: 휴대폰 형식 인증
const validatePhoneNumber = (phoneNumber: string): boolean => {
  const phoneRegex = /^(010|011|016|017|018|019)-?\d{3,4}-?\d{4}$/;
  return phoneRegex.test(phoneNumber);
};
