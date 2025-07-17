import { Routes, Route, useLocation } from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import SignLayout from "./layout/SignLayout";
import "./assets/font/font.css";
import GlobalStyle from "./style/GlobalStyle";
import { AuthProvider } from "./Context/AuthProvider";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<CommonLayout page="index" />} />
          <Route path="/project" element={<CommonLayout page="project" />} />
          <Route
            path="/project/:postId"
            element={<CommonLayout page="projectDetail" />}
          />
          <Route path="/mypage" element={<CommonLayout page="mypage" />} />
          <Route path="/write" element={<CommonLayout page="mypage" />} />
          <Route path="/signin" element={<SignLayout page="signin" />} />
          <Route path="/findpw" element={<SignLayout page="findpw" />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
