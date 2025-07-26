import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../pages/Main";
import Project from "../pages/Project";
import MyPage from "../pages/MyPage";
import PostDetail from "../pages/PostDetail";

//content분기 처리
function Content({ page }) {
  switch (page) {
    case "index":
      return <Main />;
    case "project":
      return <Project />;
    case "projectDetail":
      return <PostDetail />;
    case "mypage":
      return <MyPage />;
  }
}

function CommonLayout({ page }) {
  return (
    <>
      <Header />
      <Content page={page} />
      <Footer />
    </>
  );
}

export default CommonLayout;
