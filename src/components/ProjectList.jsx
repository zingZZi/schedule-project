import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.li`
  padding: 30px 25px;
  a {
    display: flex;
    gap: 8px;
    font-weight: 600;
    font-size: 2rem;
  }
  &:hover {
    background-color: #f6f6f6;
  }
`;

const AuthorInfo = styled.ul`
  display: flex;
  margin-top: 8px;
  gap: 9px;
  li {
    color: #4e4e4e;
  }
`;

function PrjoectList({ dataInfo, index }) {
  return (
    <List>
      <Link to={dataInfo.id} state={{ index }}>
        <span>[{dataInfo.category}]</span>
        <p>{dataInfo.title}</p>
      </Link>
      <AuthorInfo className="">
        <li>{dataInfo.date}</li>
        <li>{dataInfo.author}</li>
      </AuthorInfo>
    </List>
  );
}

export default PrjoectList;
