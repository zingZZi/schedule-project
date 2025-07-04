import styled from "styled-components";
import { PrimaryBtn } from "../components/Button";
import { useEffect, useRef, useState } from "react";

const InputWrap = styled.div`
  position: relative;
  margin-top: 16px;
  input {
    width: 100%;
    height: 40px;
    border-radius: 24px;
    border: 1px solid var(--white-color-500);
    padding: 0 24px;
  }
  .del {
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: pink;
    right: 16px;
    top: 5px;
    font-size: 0;
    border: none;
    cursor: pointer;
  }
`;

function SignIn() {
  let [emailValue, setEmailValue] = useState(undefined);
  let [pwValue, setPwValue] = useState(undefined);
  let [btnState, setbtnState] = useState(false);
  function emailCheck(e) {
    setEmailValue(e.target.value);
  }
  function pwCheck(e) {
    setPwValue(e.target.value);
  }

  useEffect(() => {
    if (emailValue && pwValue && !btnState) {
      setbtnState(true);
    } else if (emailValue === "" || pwValue === "") {
      setbtnState(false);
    }
  }, [emailValue, pwValue]);
  return (
    <form>
      <InputWrap>
        <input type="text" placeholder="email" onChange={emailCheck} />
        <button className="del icon">삭제</button>
      </InputWrap>
      <InputWrap>
        <input type="password" onChange={pwCheck} value={pwValue} />
        <button className="del icon">삭제</button>
      </InputWrap>
      <PrimaryBtn size={"fullSize"} radius={"24"} disabled={!btnState}>
        Login
      </PrimaryBtn>
      <span>{emailValue}</span>
      <span>{pwValue}</span>
    </form>
  );
}

export default SignIn;
