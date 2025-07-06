import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/timely_logo_smoothed.svg";
import { useState } from "react";

const HeaderElem = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid var(--color-gray-100);
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;
const HeaderLogo = styled.h1`
  width: 130px;
`;

const NavElem = styled.nav`
  display: flex;
  gap: 40px;
  a {
    font-size: var(--font-size-base);
    color: var(--white-color-500);
    &.on {
      font-weight: bold;
      color: var(--black-color);
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
        <HeaderNav>
          <HeaderLogo>
            <Link to="/">
              <img src={logo} className="App-logo" alt="timely" />
            </Link>
          </HeaderLogo>
          <NavElem>
            <Link
              to="/"
              data-link="index"
              onClick={gnbFnc}
              className={activeNav === "index" ? "on" : ""}
            >
              스케쥴
            </Link>
            <Link
              to="/project"
              data-link="project"
              onClick={gnbFnc}
              className={activeNav === "project" ? "on" : ""}
            >
              프로젝트
            </Link>
            <Link
              to="/mypage"
              data-link="mypage"
              onClick={gnbFnc}
              className={activeNav === "mypage" ? "on" : ""}
            >
              마이페이지
            </Link>
          </NavElem>
        </HeaderNav>

        <UserInfo>
          <h2 className="text-ir">상단 회원정보</h2>

          <span>회원명</span>
        </UserInfo>
      </div>
    </HeaderElem>
  );
}

export default Header;
