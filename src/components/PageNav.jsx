import styled from "styled-components";
const PageNation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 56px;
`;
const Btn = styled.button`
  width: 40px;
  height: 40px;
  &:first-child {
    margin-right: 20px;
  }
  &:last-child {
    margin-left: 20px;
  }
  &:hover {
    background-color: var(--white-color-200);
  }
  &.on {
    background-color: var(--primary-color);
    color: var(--white-color-100);
    font-weight: bold;
  }
`;
function PageNav({ PageNum, currentPage, setCurrentPage }) {
  return (
    <PageNation>
      <Btn disabled={currentPage == 0}>이전</Btn>
      {Array.from({ length: PageNum }, (_, index) => (
        <Btn
          key={index}
          className={currentPage === index ? "on" : null}
          onClick={() => {
            setCurrentPage(index);
          }}
        >
          {index + 1}
        </Btn>
      ))}
      <Btn disabled={currentPage === PageNum - 1}>다음</Btn>
    </PageNation>
  );
}

export default PageNav;
