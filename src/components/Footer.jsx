import styled from "styled-components";

const FooterElem = styled.footer`
  text-align: center;
  p {
    color: var(--white-color-500);
  }
`;
function Footer() {
  return (
    <FooterElem>
      <p>Timely Inc. All rights reserved. Powered by GitHub Pages.</p>
    </FooterElem>
  );
}

export default Footer;
