import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import CommonLayout from "./components/CommonLayout";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

function App() {
  const GlobalStyle = createGlobalStyle`
    ${reset}
    li{
      list-style: none;
    }
    a{
      text-decoration: none;
      color:inherit
    }
    .text-ir{
      font-size: 0%;
      text-indent:-99999px;
    }
    .container{
      max-width: 1200px;
      margin:0 auto;
    }
  `;
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonLayout page="index" />} />
          <Route path="/project" element={<CommonLayout page="project" />} />
          <Route path="/mypage" element={<CommonLayout page="mypage" />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
