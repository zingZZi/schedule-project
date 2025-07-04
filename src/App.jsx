import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommonLayout from "./components/CommonLayout";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import SignLayout from "./layout/SignLayout";
import "./assets/font/font.css";

function App() {
  const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
      box-sizing: border-box;
    }
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
      font-family: "Roboto";
    }
    :root {
        --primary-color: #EBAD2E;
        --secondary-red-color: #ed1d24;

        --white-color-100: #fff;
        --white-color-200: #F2F2F2;
        --white-color-300: #F5F5F5;
        --white-color-400: #ddd;
        --white-color-500: #C4C4C4;
        --white-color-600: #B0B0B0;

        
        --black-color: #000000;
        
        --font-size-title: 4rem;
        --font-size-large: 2.8rem;
        --font-size-medium: 2.2rem;
        --font-size-small: 2rem;
        --font-size-primary: 1.6rem;
    }
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
          <Route path="/signin" element={<SignLayout page="signin" />} />
          <Route path="/findpw" element={<SignLayout page="findpw" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
