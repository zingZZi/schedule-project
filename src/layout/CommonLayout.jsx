import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../pages/Main";
import Project from "../pages/Project";
import MyPage from "../pages/MyPage";
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

//content분기 처리
function Content({ page }) {
  switch (page) {
    case "index":
      return <Main />;
    case "project":
      return <Project />;
    case "mypage":
      return <MyPage />;
  }
}

function CommonLayout({ page, tokenState }) {
  const [activeNav, setActiveNav] = useState("");
  const location = useLocation().pathname.split("/")[1];

  //처음 로딩시 activNav 설정
  useEffect(() => {
    switch (location) {
      case "":
        return setActiveNav("index");
      case "project":
        return setActiveNav("project");
      case "mypage":
        return setActiveNav("mypage");
    }
  }, []);
  if (!tokenState) {
    return <Navigate to="/signin" replace />;
  }
  return (
    <>
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />
      <Content page={page} />
      <Footer />
    </>
  );
}

export default CommonLayout;
