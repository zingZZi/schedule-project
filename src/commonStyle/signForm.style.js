import styled from "styled-components";
export const FromElem = styled.form`
  max-width: 320px;
  margin: 0 auto;
`;

export const InputWrap = styled.div`
  position: relative;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
  input {
    font-size: var(--font-size-small);
    width: 100%;
    height: 40px;
    border-radius: 24px;
    border: 1px solid var(--white-color-500);
    padding: 10px 40px 10px 24px;
  }
  .del {
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: transparent;
    background-image: url(icon-delete.svg);
    right: 16px;
    top: 12px;
    font-size: 0;
    border: none;
    cursor: pointer;
  }

  //오류일때
  &.error {
    input {
      border: 1px solid var(--error-color);
      color: var(--error-color);
    }
    p {
      color: var(--error-color);
      font-size: var(--font-size-small);
      padding-left: 20px;
      line-height: 2.1rem;
      margin-top: 4px;
    }
  }
`;
