import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const HeaderElem = styled.header`
  box-shadow: 0, 0, 0, 0.2;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const NavElem = styled.nav`
  display: flex;
  li {
    &.on {
      font-weight: bold;
    }
  }
`;

const UserInfo = styled.section`
  display: flex;
`;

function Header({ activeNav, setActiveNav }) {
  function gnbFnc(e) {
    setActiveNav(e.target.dataset.link);
  }
  return (
    <HeaderElem>
      <div className="container">
        <div>
          <h1>
            <Link to="/">로고이미지영역{/* <img src="" alt="" /> */}</Link>
          </h1>
          <NavElem>
            <li className={activeNav === "index" ? "on" : ""}>
              <Link to="/" data-link="index" onClick={gnbFnc}>
                스케쥴
              </Link>
            </li>
            <li className={activeNav === "project" ? "on" : ""}>
              <Link to="/project" data-link="project" onClick={gnbFnc}>
                프로젝트
              </Link>
            </li>
            <li className={activeNav === "mypage" ? "on" : ""}>
              <Link to="/mypage" data-link="mypage" onClick={gnbFnc}>
                마이페이지
              </Link>
            </li>
          </NavElem>
        </div>

        <UserInfo>
          <h2 className="text-ir">상단 회원정보</h2>

          <span>회원명</span>
        </UserInfo>
      </div>
    </HeaderElem>
  );
}

export default Header;
