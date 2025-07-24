import styled from "styled-components";
import { Link } from "react-router-dom";
import { BasicBtn } from "../components/Button";
import { useEffect, useRef, useState } from "react";
import Icon from "../style/Icon.module.css";
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
      background: url(icon-delete.svg) no-repeat 50%;
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
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      display: block;
      width: 28px;
      height: 28px;
    }
  }
`;

function SearchForm({ handleSearchChange, keyword }) {
  //검색폼관련 기능
  const [inputData, setInputData] = useState(keyword);
  const [resetBtn, setResetBtn] = useState(false);

  function seachSubmit(e) {
    e.preventDefault();
    let searchInputData = inputData.trim();

    handleSearchChange(searchInputData);
  }
  function inputHandler(e) {
    setInputData(e.target.value);
    if (inputData === "") {
      setResetBtn(false);
    } else {
      setResetBtn(true);
    }
  }
  function searchReset() {
    setInputData("");
    handleSearchChange("");
    setResetBtn(false);
  }
  useEffect(() => {
    if (inputData) {
      setResetBtn(true);
    }
  }, []);

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
        {resetBtn ? (
          <BasicBtn className="text-ir" type="button" onClick={searchReset}>
            검색리셋버튼
          </BasicBtn>
        ) : null}
      </section>
      <Link to="/write" className="write-btn">
        <span className={Icon["icon-write"]}></span>
      </Link>
    </FieldElem>
  );
}

export default SearchForm;
