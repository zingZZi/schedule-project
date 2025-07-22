import styled from "styled-components";
import CustomnSelectBox from "../components/CustomSelectBox";
import { useEffect, useMemo, useRef, useState } from "react";
import PrjoectList from "../components/ProjectList";
import SearchForm from "../components/SearchForm";
import PageNav from "../components/PageNav";

const Section = styled.section`
  max-width: 770px;
  margin: 30px auto 0;
`;

const ProjectListFilter = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 16px;
  fieldset {
  }
`;

function Project() {
  //커스텀 탭 관련 정보
  const [postList, setPostList] = useState([]);
  const [changeFilter, setChangeFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");
  const POST_LIST_COUNT = 8;

  //프로젝트 리스트 data 가져오기
  useEffect(() => {
    const projectList = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        if (!response.ok) {
          return;
        }
        const projectLists = await response.json();
        setPostList(projectLists);
        return;
      } catch (error) {
        throw new Error(error);
      }
    };
    projectList();
  }, []);

  //필터링 리스트
  const filteredList = useMemo(() => {
    let filteredResults = [...postList];
    //카테고리 필터링 리스트
    if (changeFilter === "" || changeFilter === "전체") {
      filteredResults = [...postList];
    } else {
      filteredResults = filteredResults.filter(
        (e) => e.category === changeFilter
      );
    }
    console.log(searchKeyword);
    //검색 필터링 리스트
    if (searchKeyword) {
      filteredResults = filteredResults.filter(
        (e) =>
          e.title.includes(searchKeyword) || e.author.includes(searchKeyword)
      );
    }

    return filteredResults;
  }, [postList, currentPage, changeFilter, searchKeyword]);

  const ProjectList = useMemo(() => {
    const start = currentPage * POST_LIST_COUNT;
    const end = currentPage + start + POST_LIST_COUNT;
    return filteredList.slice(start, end);
  }, [postList, currentPage, changeFilter, searchKeyword]);

  const PageNum = useMemo(() => {
    const count = filteredList.length / POST_LIST_COUNT;
    return Math.ceil(count);
  }, [postList, currentPage, changeFilter, searchKeyword]);

  return (
    <Section>
      <h2 className="text-ir">프로젝트 페이지</h2>
      {/* 상단 필터 및 검색영역 */}
      <ProjectListFilter>
        <CustomnSelectBox
          defaultText={"전체"}
          type={"filter"}
          lists={["전체", "기획", "디자인", "프론트엔드", "백엔드"]}
          onChange={(value) => {
            setChangeFilter(value);
            setCurrentPage(0);
          }}
        />
        <SearchForm setSearchKeyword={setSearchKeyword} />
      </ProjectListFilter>

      <ul>
        {ProjectList.length > 0 ? (
          ProjectList.map((e) => {
            return <PrjoectList dataInfo={e} key={e.id} />;
          })
        ) : (
          <p>리스트없음</p>
        )}
      </ul>

      <PageNav
        PageNum={PageNum}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Section>
  );
}

export default Project;
