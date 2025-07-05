import styled from "styled-components";
import { PrimaryBtn } from "../components/Button";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  //input 값
  let [emailValue, setEmailValue] = useState(undefined);
  let [pwValue, setPwValue] = useState(undefined);
  //input 오류 color
  let [emailState, setEmailtState] = useState("true");
  let [pwState, setPWtState] = useState("true");
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

      //위에서 체크하는게 맞는가? 아니면 !emailCheck에서 확인하는게 맞는가? & 이메일에서 .<< 이부분은 체크 안되는중 이거 어케잡지?
      if (!emailValue.includes("@") && !emailValue.includes(".")) {
        console.log("양식오류");
        return;
      }

      //오류체크
      const emailCheck = users.find((e) => e.email === emailValue);
      const pwCheck = users.find((e) => e.password === pwValue);
      if (!emailCheck) {
        console.log("아이디를 확인하세요");
        setEmailtState(!emailState);
        document.querySelector("#email").focus();
      } else if (emailCheck && !pwCheck) {
        console.log("비밀번호를 확인하세요");
        document.querySelector("#pw").focus();
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
        localStorage.setItem("userName", user.name);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  //토큰관련 정보만들기
  function generateFakeToken(user) {
    return `token_${user.id}_${Date.now()}`;
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputWrap>
        <input
          type="text"
          placeholder="email"
          onChange={emailCheck}
          id="email"
          className={emailState ? null : "error"}
        />
        <button className="del icon">삭제</button>
      </InputWrap>
      <InputWrap>
        <input
          type="password"
          placeholder="password"
          onChange={pwCheck}
          value={pwValue}
          id="pw"
        />
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
