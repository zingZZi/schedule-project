import styled from "styled-components";

function PageNav() {
  const PageNation = styled.div`
    display: flex;
  `;
  const Btn = styled.button`
    width: 40px;
    height: 40px;
  `;
  return (
    <PageNation>
      <Btn>이전페이지 이동</Btn>
      <Btn>1</Btn>
      <Btn>2</Btn>
      <Btn>3</Btn>
      <Btn>다음페이지 이동</Btn>
    </PageNation>
  );
}

export default PageNav;
