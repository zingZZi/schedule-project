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
function PageNav({ PageNum, page, handlePageChange }) {
  return (
    <PageNation>
      {PageNum > 1 ? <Btn disabled={page == 1}>이전</Btn> : null}
      {Array.from({ length: PageNum }, (_, index) => (
        <Btn
          key={index}
          className={page - 1 === index ? "on" : null}
          onClick={() => {
            handlePageChange(index);
          }}
        >
          {index + 1}
        </Btn>
      ))}
      {PageNum > 1 ? <Btn disabled={page === PageNum}>다음</Btn> : null}
    </PageNation>
  );
}

export default PageNav;
