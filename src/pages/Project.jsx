import { Link } from "react-router-dom";
import styled from "styled-components";
import PageNav from "../components/PageNav";
import CustomnSelectBox from "../components/CustomSelectBox";
import { useSelectHook } from "../hooks/useSelectHook";
import { useEffect, useMemo, useState } from "react";
import PrjoectList from "../components/ProjectList";
import { BasicBtn } from "../components/Button";
const ProjectListFilter = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  fieldset {
    display: flex;
    align-items: center;
    gap: 12px;
    &.submit-form {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
  a {
    background-color: var(--white-color-100);
    border: 1px solid var(--primary-color);
    padding: 6px 34px;
    height: 32px;
    border-radius: 24px;
    color: var(--primary-color);
  }
  button {
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 50%;
  }
`;

function Project() {
  //커스텀 탭 관련 정보
  const lists = ["전체", "기획", "디자인", "프론트엔드", "백엔드"];
  const { toggle, isOpen, selectedText, listSelect } = useSelectHook({
    type: "filter",
    defaultText: "전체",
  });
  const [postList, setPostList] = useState([]);
  const [formBtnState, setFormBtnState] = useState("button");

  useEffect(() => {
    const projectList = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        if (!response.ok) {
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

  const formBtnFnc = (e) => {
    e.preventDefault();
    if (e.target.type === "button") {
      setFormBtnState("submit");
    } else {
      console.log("action 실행");
    }
  };
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

        <fieldset className={formBtnState === "submit" ? "submit-form" : null}>
          <legend className="text-ir">검색입력창</legend>
          {formBtnState === "button" ? <Link to="/write">작성하기</Link> : null}
          {formBtnState === "button" ? null : (
            <input type="text" placeholder="제목,  작성자로 검색" />
          )}
          <BasicBtn
            type={formBtnState}
            className="text-ir"
            onClick={formBtnFnc}
          >
            검색
          </BasicBtn>
        </fieldset>
      </ProjectListFilter>
      <ul>
        {filteredPostList.map((e) => {
          return <PrjoectList title={e.title} key={e.id} />;
        })}
      </ul>

      <PageNav />
    </section>
  );
}

export default Project;
