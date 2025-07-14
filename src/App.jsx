import { Routes, Route, useLocation } from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import SignLayout from "./layout/SignLayout";
import "./assets/font/font.css";
import { useEffect, useRef, useState } from "react";
import { LoginStateProvider } from "./Context/LoginStateProvider";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  const localToken = localStorage.getItem("token");
  const [tokenState, setTokenState] = useState(localToken);
  return (
    <>
      <GlobalStyle />
      <LoginStateProvider>
        <Routes>
          <Route
            path="/"
            element={<CommonLayout page="index" tokenState={tokenState} />}
          />
          <Route
            path="/project"
            element={<CommonLayout page="project" tokenState={tokenState} />}
          />
          <Route
            path="/mypage"
            element={<CommonLayout page="mypage" tokenState={tokenState} />}
          />
          <Route
            path="/write"
            element={<CommonLayout page="mypage" tokenState={tokenState} />}
          />
          <Route
            path="/signin"
            element={<SignLayout page="signin" setTokenState={setTokenState} />}
          />
          <Route path="/findpw" element={<SignLayout page="findpw" />} />
        </Routes>
      </LoginStateProvider>
    </>
  );
}

export default App;
