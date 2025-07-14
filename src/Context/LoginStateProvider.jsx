import { createContext, useContext, useState } from "react";

const useLoginState = () => useContext(LoginContent);
const LoginContent = createContext();
//로그인 정보저장 관련 provider
function LoginStateProvider({ children }) {
  const [loginUserInfo, setLginUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo") || "[]")
  );
  function loginUserInfoSave(data) {
    setLginUserInfo(data);
  }
  return (
    <LoginContent.Provider value={{ loginUserInfo, loginUserInfoSave }}>
      {children}
    </LoginContent.Provider>
  );
}

export { LoginStateProvider, LoginContent, useLoginState };
