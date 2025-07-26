import { PrimaryBtn } from "../../components/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FromElem, InputWrap } from "../../commonStyle/signForm.style";
import { SignLinks } from "./SignIn.style";

function SignIn() {
  //login useState
  let [emailValue, setEmailValue] = useState("");
  let [pwValue, setPwValue] = useState("");
  let [emailState, setEmailtState] = useState("true");
  let [pwState, setPWtState] = useState("true");
  let [btnState, setbtnState] = useState(false);

  function emailCheck(e) {
    setEmailValue(e.target.value);
    if (!emailState) {
      setEmailtState(true);
    }
  }
  function pwCheck(e) {
    setPwValue(e.target.value);
    if (!pwState) {
      setPWtState(true);
    }
  }

  //button 활성화 관련
  useEffect(() => {
    if (emailValue && pwValue && !btnState) {
      setbtnState(true);
    } else if (emailValue === "" || pwValue === "") {
      setbtnState(false);
    }
  }, [emailValue, pwValue]);

  //로그인 검증관련
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  function inputDel(e) {
    const delInputId = e.target.closest("div").querySelector("input").id;
    if (delInputId === "email") {
      setEmailValue("");
    } else {
      setPwValue("");
    }
  }

  return (
    <FromElem onSubmit={handleSubmit}>
      <InputWrap className={emailState ? null : "error"}>
        <input
          className="test"
          type="text"
          placeholder="email"
          onChange={emailCheck}
          id="email"
          value={emailValue}
        />
        {emailValue ? (
          <button type="button" className="del icon" onClick={inputDel}>
            삭제
          </button>
        ) : null}
      </InputWrap>
      <InputWrap className={pwState ? null : "error"}>
        <input
          className="test"
          type="password"
          placeholder="password"
          onChange={pwCheck}
          value={pwValue}
          id="pw"
        />
        {pwValue ? (
          <button type="button" className="del icon" onClick={inputDel}>
            삭제
          </button>
        ) : null}
      </InputWrap>
      <PrimaryBtn
        size={"fullSize"}
        radius={"24"}
        disabled={!btnState}
        weight={"bold"}
      >
        Login
      </PrimaryBtn>
      <SignLinks>
        <li>
          <Link to="/signup">회원가입</Link>
        </li>
      </SignLinks>
    </FromElem>
  );
}

export default SignIn;
