import styled from "styled-components";
import { Link } from "react-router-dom";
import { BasicBtn } from "../components/Button";
import { useEffect, useRef, useState } from "react";
const FieldElem = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;

  section {
    display: flex;
    gap: 8px;
    position: relative;
    input {
      border: 1px solid var(--white-color-500);
      border-radius: 30px;
      width: 300px;
      height: 40px;
      padding: 0 40px 0 20px;
    }
    button {
      position: absolute;
      border: 1px solid transparent;
      background: pink;
      right: 6px;
      top: 4px;
      width: 32px;
      height: 32px;
      padding: 0;
      border-radius: 50%;
    }
  }

  .write-btn {
    background-color: var(--primary-color);
    border-radius: 4px;
    width: 38px;
    height: 38px;
    line-height: 38px;
    text-align: center;
  }
`;

function SearchForm({ handleSearchChange, keyword }) {
  //검색폼관련 기능
  const [inputData, setInputData] = useState(keyword);

  function seachSubmit(e) {
    e.preventDefault();
    let searchInputData = inputData.trim();

    handleSearchChange(searchInputData);
  }
  function inputHandler(e) {
    setInputData(e.target.value);
  }
  function searchReset() {
    setInputData("");
    handleSearchChange("");
  }

  return (
    <FieldElem onSubmit={seachSubmit}>
      <section>
        <h3 className="text-ir">검색영역</h3>
        <input
          type="text"
          placeholder="제목,작성자로 검색"
          value={inputData}
          onChange={inputHandler}
        />
        <BasicBtn className="text-ir" type="button" onClick={searchReset}>
          검색리셋버튼
        </BasicBtn>
      </section>
      <Link to="/write" className="write-btn">
        ✏️
      </Link>
    </FieldElem>
  );
}

export default SearchForm;
