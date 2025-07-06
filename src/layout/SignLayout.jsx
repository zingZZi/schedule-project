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

function Content({ page, setTokenState, setUserInfo }) {
  switch (page) {
    case "signin":
      return <SignIn setTokenState={setTokenState} setUserInfo={setUserInfo} />;
      break;
    case "findpw":
      return <>비번찾기</>;
      break;
  }
}
function SignLayout({ page, setTokenState, setUserInfo }) {
  return (
    <SignWrap>
      <SignFlexCenter>
        <LogoWrap>
          <img src={logo} className="App-logo" alt="timely" />
        </LogoWrap>
        <Content
          page={page}
          setTokenState={setTokenState}
          setUserInfo={setUserInfo}
        />
      </SignFlexCenter>

      <Footer />
    </SignWrap>
  );
}

export default SignLayout;
