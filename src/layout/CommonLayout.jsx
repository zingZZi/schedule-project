import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../pages/Main";
import Project from "../pages/Project";
import MyPage from "../pages/MyPage";
import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { AuthContent } from "../Context/AuthProvider";

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

function CommonLayout({ page }) {
  const { user } = useContext(AuthContent);
  //처음 로딩시 activNav 설정;
  useEffect(() => {
    switch (location) {
      case "":
        return setActiveNav("index");
      case "project":
        return setActiveNav("project");
      case "mypage":
        return setActiveNav("mypage");
    }
  }, [location]);

  if (!user) {
    return <Navigate to="/signin" replace />;
  }
  return (
    <>
      <Header />
      <Content page={page} />
      <Footer />
    </>
  );
}

export default CommonLayout;
