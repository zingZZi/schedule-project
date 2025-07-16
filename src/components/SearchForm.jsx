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

function SearchForm() {
  //검색폼관련 기능
  const seachRef = useRef("null");
  const [formBtnState, setFormBtnState] = useState("button");
  const [inpTxt, setInpTxt] = useState("");
  //버튼 기능설정
  const formBtnFnc = (e) => {
    e.preventDefault();
    if (e.target.type === "button") {
      setFormBtnState("submit");
    } else {
      console.log("action 실행");
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
  return (
    <FieldElem
      ref={seachRef}
      className={formBtnState === "submit" ? "submit-form" : null}
    >
      <legend className="text-ir">검색입력창</legend>
      {formBtnState === "button" ? <Link to="/write">작성하기</Link> : null}
      {formBtnState === "button" ? null : (
        <input type="text" placeholder="제목,작성자로 검색" />
      )}
      <BasicBtn type={formBtnState} className="text-ir" onClick={formBtnFnc}>
        검색
      </BasicBtn>
    </FieldElem>
  );
}

export default SearchForm;
