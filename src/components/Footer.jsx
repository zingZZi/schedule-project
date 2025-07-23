import styled from "styled-components";

const FooterElem = styled.footer`
  padding: 120px 0 50px;
  p {
    color: var(--white-color-500);
  }
`;
function Footer() {
  return (
    <FooterElem>
      <p className="container">
        Timely Inc. All rights reserved. Powered by GitHub Pages.
      </p>
    </FooterElem>
  );
}

export default Footer;
