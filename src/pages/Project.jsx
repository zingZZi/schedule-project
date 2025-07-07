import { Link } from "react-router-dom";
import styled from "styled-components";
import PageNav from "../components/PageNav";

const ProjectListFilter = styled.form``;
function Project() {
  return (
    <section className="container">
      <h2 className="text-ir">프로젝트</h2>
      <ProjectListFilter>
        <div className="category-filter">
          <span>전체</span>
          <ul>
            <li>
              <span>전체</span>
            </li>
            <li>
              <span>전체</span>
            </li>
            <li>
              <span>전체</span>
            </li>
          </ul>
        </div>
        <>
          <Link to="/write">작성하기</Link>
          <input type="text" />
          <button>검색</button>
        </>
      </ProjectListFilter>

      <ul>
        <li>
          <a href="">
            <span>[조직]</span>글제목
          </a>
          <p>
            <span className="date">2025.07.07</span>
            <span className="writer">작성자 이름</span>
          </p>
        </li>
      </ul>

      <PageNav />
    </section>
  );
}

export default Project;
