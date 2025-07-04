import styled from "styled-components";
import SignIn from "../pages/SignIn";
import logo from "../assets/images/timely_logo_smoothed.svg";
const SignWrap = styled.main`
  max-width: 320px;
  margin: 0 auto;
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
      <h1>
        <img src={logo} className="App-logo" alt="React" />
      </h1>
      <Content page={page} />
    </SignWrap>
  );
}

export default SignLayout;
