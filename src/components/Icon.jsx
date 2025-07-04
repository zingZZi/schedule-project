import styled from "styled-components";

const BasicIcon = styled.span`
  font-size: 0;
  text-indent: -9999px;
  display: block;
  width: ${(props) => (props.width ? `${props.width}px` : "20px")};
  height: ${(props) => (props.height ? `${props.height}px` : "20px")};
`;
