import styled from "styled-components";
import { PrimaryBtn } from "../components/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginState } from "../Context/LoginStateProvider";

const FromElem = styled.form`
  max-width: 320px;
  margin: 0 auto;
`;
const InputWrap = styled.div`
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

function SignIn({ setTokenState, setUserInfo }) {
  const { loginUserInfoSave } = useLoginState();
  const navigate = useNavigate();
  //input 값
  let [emailValue, setEmailValue] = useState("");
  let [pwValue, setPwValue] = useState("");
  //input 오류 color
  let [emailState, setEmailtState] = useState("true");
  let [pwState, setPWtState] = useState("true");

  //errorText
  let [errorText, setErrorText] = useState("");

  //button 활성화 관련
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
      setEmailtState(true);
    }
  }

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
    try {
      const response = await fetch("http://localhost:3000/users");
      if (!response.ok) {
        throw new Error("네크워크응답에 문제있음");
      }

      const users = await response.json(); //전체 데이터

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailValue)) {
        setErrorText("이메일 양식이 잘못되었습니다");
        setEmailtState(!emailState);
        return;
      }

      //로그인확인
      const user = users.find(
        (e) => e.email === emailValue && e.password === pwValue
      );
      if (user) {
        //로그인 한사람 정보
        const fakeToken = generateFakeToken(user);

        //로컬스토리지 저장정보
        localStorage.setItem("token", fakeToken);
        localStorage.setItem("userInfo", JSON.stringify(user));
        setTokenState(true);
        loginUserInfoSave(user);
        navigate("/");
      } else {
        //실패시 오류체크
        const emailCheck = users.find((e) => e.email === emailValue);
        if (!emailCheck) {
          setErrorText("아이디를 확인하세요");
          setEmailtState(!emailState);
          document.querySelector("#email").focus();
        } else if (emailCheck && emailCheck.password !== pwValue) {
          setErrorText("비밀번호를 확인하세요");
          setPWtState(!pwState);
          document.querySelector("#pw").focus();
        }
      }
    } catch (error) {
      console.error(error);
    }
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
        {emailState ? null : <p>{errorText}</p>}
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

        {pwState ? null : <p>{errorText}</p>}
      </InputWrap>
      <PrimaryBtn
        size={"fullSize"}
        radius={"24"}
        disabled={!btnState}
        weight={"bold"}
      >
        Login
      </PrimaryBtn>
    </FromElem>
  );
}

export default SignIn;
