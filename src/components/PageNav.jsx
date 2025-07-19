import styled from "styled-components";
const PageNation = styled.div`
  display: flex;
`;
const Btn = styled.button`
  width: 40px;
  height: 40px;
`;
function PageNav({PageNum,currentPage,setCurrentPage}) {
  console.log(currentPage)
  return (
    <PageNation>
      <Btn>이전페이지 이동</Btn>
      {Array.from({ length: PageNum }, (_, index) => (
        <Btn key={index} className={currentPage===index?'on':null} onClick={()=>{setCurrentPage(index)}}>
          {index + 1}
        </Btn>
      ))}
      <Btn>다음페이지 이동</Btn>
    </PageNation>
  );
}

export default PageNav;
