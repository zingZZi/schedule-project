import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
      box-sizing: border-box;
    }
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
      font-family: "Roboto";
    }
    html{
      font-size: 10px;
    }
    :root {
        --primary-color: #EBAD2E;
        --error-color: #FF2D2D;

        --white-color-100: #fff;
        --white-color-200: #F2F2F2;
        --white-color-300: #F5F5F5;
        --white-color-400: #ddd;
        --white-color-500: #C4C4C4;
        --white-color-600: #B0B0B0;

        
        --black-color: #000000;
        
        
        --font-size-base: 1.6rem; //16px
        --font-size-small: 1.4rem;
    }
    body{
      min-width: 320px;
      font-size:var(--font-size-small)
    }
    li{
      list-style: none;
    }
    a{
      text-decoration: none;
      color:inherit
    }
    button{
      padding:0;
      background-color: transparent;
      border:none;
      cursor: pointer;
    }
    img{
      max-width: 100%;
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
export default GlobalStyle;
