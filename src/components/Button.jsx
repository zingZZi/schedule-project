import styled from "styled-components";

const BasicBtn = styled.button`
  background-color: none;
  border: 1px solid var(--black-color);
  width: ${(props) => (props.size === "fullSize" ? "100%" : auto)};
  margin: 0;
  padding: 10px 20px;
  border-radius: ${(props) => (props.radius ? `${props.radius}px` : 0)};
  font-weight: ${(props) => (props.weight === "bold" ? "700" : "400")};
  cursor: pointer;
  &:disabled {
    background-color: var(--white-color-500);
    border: none;
    color: var(--white-color-100);
  }
`;
const PrimaryBtn = styled(BasicBtn)`
  background-color: var(--primary-color);
  height: 40px;
  border: none;
  margin-top: 40px;
  color: var(--white-color-100);
`;
export { BasicBtn, PrimaryBtn };
