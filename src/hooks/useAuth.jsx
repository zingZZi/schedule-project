import { useState } from "react";

//토큰관련 정보만들기
function generateFakeToken(user) {
  return `token_${user.userId}_${Date.now()}`;
}

export function useAuth() {
  const savedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [user, setUser] = useState(savedUserInfo ? savedUserInfo : null);

  const login = async (email, password) => {
    const response = await fetch("http://localhost:3000/users");
    if (!response.ok) {
      throw new Error("네크워크응답에 문제있음");
    }
    const users = await response.json(); //전체 데이터
    const user = users.find(
      (e) => e.email === email && e.password === password
    );
    //정보틀렸을시,
    if (!user) {
      //이메일 체크부분
      const emailCheck = users.find((e) => e.email === email);
      if (!emailCheck) {
        throw new Error("이메일 체크하세요");
      } else {
        throw new Error("비밀번호 체크하세요");
      }
    }

    //로그인성공할시

    //faketoken 발행
    const fakeToken = generateFakeToken(user);
    //로컬스토리지 저장정보
    localStorage.setItem("token", fakeToken);
    localStorage.setItem("userInfo", JSON.stringify(user));
    setUser(user);
    return user;
  };

  return { user, login, savedUserInfo };
}
