import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { useLoginState } from "../Context/LoginStateProvider";
import logo from "../assets/images/timely_logo_smoothed.svg";
import userIcon from "../assets/images/basic-user-icon.svg";

const HeaderElem = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid var(--color-gray-100);
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
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

const UserInfoWrap = styled.section`
  &.active {
    padding: 16px 4px;
    box-shadow: 1px 1px 8px 0 rgba(156, 156, 156, 0.5);
    position: absolute;
    right: 0;
    top: -5px;
    min-width: 240px;
    border-radius: 4px;
    img {
      width: 44px;
      height: 44px;
    }
    > div {
      gap: 14px;
      padding-left: 10px;
    }
  }
`;
const UserInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
  }
  span {
    display: block;
    &.email {
      font-size: 1.2rem;
      color: var(--white-color-500);
      margin-top: 6px;
    }
  }
`;

const LinkNav = styled.ul`
  margin-top: 20px;
  li {
    padding: 10px;
    border-radius: 5px;
    a,
    button {
      font-size: var(--font-size-base);
      background-color: transparent;
      border: none;
      height: 2.4rem;
    }
    &:hover {
      background-color: var(--white-color-300);
    }
  }
`;

function Header({ activeNav, setActiveNav }) {
  const { loginUserInfo } = useLoginState();
  function gnbFnc(e) {
    setActiveNav(e.target.dataset.link);
  }
  const [userInfoState, setUserInfoState] = useState(false);
  function openUserBox() {
    setUserInfoState(!userInfoState);
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

        <UserInfoWrap
          onClick={openUserBox}
          className={userInfoState ? "active" : null}
        >
          <h2 className="text-ir">상단 회원정보</h2>
          <UserInfo>
            <img
              src={loginUserInfo.profileImage || userIcon}
              onError={(e) => {
                e.target.src = userIcon;
              }}
              alt="프로필이미지"
            />
            <p>
              <span>{loginUserInfo.name}</span>
              {userInfoState ? (
                <span className="email">{loginUserInfo.email}</span>
              ) : null}
            </p>
          </UserInfo>
          {userInfoState ? (
            <LinkNav>
              <li>
                <Link to="/mypage">프로필 관리</Link>
              </li>
              <li>
                <button>로그아웃</button>
              </li>
            </LinkNav>
          ) : null}
        </UserInfoWrap>
      </div>
    </HeaderElem>
  );
}

export default Header;
