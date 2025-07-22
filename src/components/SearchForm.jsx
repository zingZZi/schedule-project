import styled from "styled-components";
import { Link } from "react-router-dom";
import { BasicBtn } from "../components/Button";
import { useEffect, useRef, useState } from "react";
const FieldElem = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  &.submit-form {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    input {
      width: 100%;
      border: 1px solid var(--white-color-500);
      height: 40px;
      padding: 0 22px;
      border-radius: 40px;
    }
    button {
      position: absolute;
      right: 15px;
      top: 5px;
      width: 29px;
      height: 29px;
      border: none;
      background: pink;
    }
  }
  a {
    background-color: var(--white-color-100);
    border: 1px solid var(--primary-color);
    padding: 0 34px;
    line-height: 32px;
    border-radius: 24px;
    color: var(--primary-color);
  }
  button {
    min-width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 50%;
  }
`;

function SearchForm({ setSearchKeyword }) {
  //검색폼관련 기능
  const seachRef = useRef("null");
  const [formBtnState, setFormBtnState] = useState("button");
  let serachInuptValue = useRef("");
  //버튼 기능설정
  const formBtnFnc = (e) => {
    if (e.target.type === "button") {
      e.preventDefault();
      setFormBtnState("submit");
    }
  };
  //
  useEffect(() => {
    function InputCloseFnc(e) {
      if (
        seachRef.current.classList.contains("submit-form") &&
        !seachRef.current.contains(e.target)
      ) {
        setFormBtnState("button");
      }
    }
    document.addEventListener("mousedown", InputCloseFnc);
  }, []);

  function seachSubmit(e) {
    e.preventDefault();
    let searchInputData = serachInuptValue.current.value.trim();
    setSearchKeyword(searchInputData);
  }

  return (
    <FieldElem
      onSubmit={seachSubmit}
      ref={seachRef}
      className={formBtnState === "submit" ? "submit-form" : null}
    >
      {formBtnState === "button" ? <Link to="/write">작성하기</Link> : null}
      {formBtnState === "button" ? null : (
        <input
          type="text"
          placeholder="제목,작성자로 검색"
          ref={serachInuptValue}
        />
      )}
      <BasicBtn type={formBtnState} className="text-ir" onClick={formBtnFnc}>
        검색
      </BasicBtn>
    </FieldElem>
  );
}

export default SearchForm;
