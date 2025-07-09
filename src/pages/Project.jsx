import { Link } from "react-router-dom";
import styled from "styled-components";
import PageNav from "../components/PageNav";
import CustomnSelectBox from "../components/CustomSelectBox";
import { useSelectHook } from "../hooks/useSelectHook";
import { useEffect, useMemo, useState } from "react";
const ProjectListFilter = styled.form``;
function Project() {
  //커스텀 탭 관련 정보
  const lists = ["전체", "기획", "디자인", "프론트엔드", "백엔드"];
  const { toggle, isOpen, selectedText, listSelect } = useSelectHook({
    type: "filter",
    defaultText: "전체",
  });

  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const projectList = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        if (!response.ok) {
          console.log(에러라우);
          return;
        }

        const projectLists = await response.json();
        setPostList(projectLists);
        setFilteredPostList(projectLists);
      } catch (error) {}
    };
    projectList();
  }, []);
  const filteredPostList = useMemo(() => {
    return selectedText === "전체"
      ? postList
      : postList.filter((e) => e.category === selectedText);
  }, [postList, selectedText]);
  return (
    <section className="container">
      <h2 className="text-ir">프로젝트</h2>
      <ProjectListFilter>
        <CustomnSelectBox
          lists={lists}
          toggle={toggle}
          isOpen={isOpen}
          selectedText={selectedText}
          listSelect={listSelect}
        />
        <>
          <Link to="/write">작성하기</Link>
          <input type="text" />
          <button>검색</button>
        </>
      </ProjectListFilter>

      <ul>
        {filteredPostList.map((e) => {
          return (
            <li key={e.id}>
              <p>{e.title}</p>
            </li>
          );
        })}
      </ul>

      <PageNav />
    </section>
  );
}

export default Project;
