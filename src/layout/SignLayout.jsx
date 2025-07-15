import styled from "styled-components";
import SignIn from "../pages/SignIn";
import logo from "../assets/images/timely_logo_smoothed.svg";
import Footer from "../components/Footer";
const SignWrap = styled.main`
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const SignFlexCenter = styled.div`
  width: 100%;
`;

const LogoWrap = styled.h1`
  max-width: 150px;
  margin: 0 auto 32px;
  img {
    max-width: 100%;
  }
`;

function Content({ page }) {
  switch (page) {
    case "signin":
      return <SignIn />;
      break;
    case "findpw":
      return <>비번찾기</>;
      break;
  }
}
function SignLayout({ page }) {
  return (
    <SignWrap>
      <SignFlexCenter>
        <LogoWrap>
          <img src={logo} className="App-logo" alt="timely" />
        </LogoWrap>
        <Content page={page} />
      </SignFlexCenter>

      <Footer />
    </SignWrap>
  );
}

export default SignLayout;
