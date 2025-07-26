import { PrimaryBtn } from "../../components/Button";
import { useState } from "react";
import { FromElem, InputWrap } from "../../commonStyle/signForm.style";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [teamId, setTeamID] = useState("");
  const [positionId, setPositionId] = useState("");

  //form input data정보
  const handleData = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "pw") {
      setPassword(e.target.value);
    } else if (e.target.id === "name") {
      setDisplayName(e.target.value);
    } else if (e.target.id === "team") {
      setTeamID(e.target.value);
    } else if (e.target.id === "position") {
      setPositionId(e.target.value);
    }
  };

  //회원가입 function
  function signFrom(e) {
    e.preventDefault();
  }
  return (
    <FromElem onSubmit={signFrom}>
      <InputWrap>
        <input
          id="email"
          type="email"
          placeholder="email"
          onChange={handleData}
          value={email}
        />
      </InputWrap>
      <InputWrap>
        <input
          type="password"
          placeholder="password"
          id="pw"
          onChange={handleData}
          value={password}
        />
      </InputWrap>
      <InputWrap>
        <input
          type="text"
          placeholder="이름"
          id="name"
          onChange={handleData}
          value={displayName}
        />
      </InputWrap>
      <InputWrap>
        <select id="team" onChange={handleData}>
          <option name="team" value="소속팀선택해주세요">
            소속팀선택해주세요
          </option>
          <option name="team" value="기획팀">
            기획팀
          </option>
          <option name="team" value="프론트엔드팀">
            프론트엔드팀
          </option>
          <option name="team" value="앱개발팀">
            앱개발팀
          </option>
        </select>
      </InputWrap>
      <InputWrap>
        <select name="" id="position" onChange={handleData}>
          <option value="직군선택">직군선택</option>
          <option value="기획">기획</option>
          <option value="디자이너">디자이너</option>
          <option value="백엔드">백엔드</option>
        </select>
      </InputWrap>

      <PrimaryBtn size={"fullSize"} radius={"24"} weight={"bold"}>
        회원가입
      </PrimaryBtn>
    </FromElem>
  );
}

export default Signup;
