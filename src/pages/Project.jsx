import styled from "styled-components";
import CustomnSelectBox from "../components/CustomSelectBox";
import { useEffect, useMemo, useRef, useState } from "react";
import PrjoectList from "../components/ProjectList";
import SearchForm from "../components/SearchForm";
import PageNav from "../components/PageNav";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const category = searchParams.get("category") || "전체";
  const keyword = searchParams.get("search") || "";

  const handleCategoryChange = (newCategory) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("category", newCategory);
      params.set("page", "1"); // 필터 바꾸면 1페이지로
      return params;
    });
  };

  const handlePageChange = (newPage) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("page", newPage + 1);
      return params;
    });
  };

  const handleSearchChange = (keyword) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("search", keyword);
      params.set("page", "1");
      return params;
    });
  };

  //커스텀 탭 관련 정보
  const [postList, setPostList] = useState([]);
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
    if (category === "전체") {
      filteredResults = [...postList];
    } else {
      filteredResults = filteredResults.filter((e) => e.category === category);
    }
    //검색 필터링 리스트
    if (keyword) {
      filteredResults = filteredResults.filter(
        (e) => e.title.includes(keyword) || e.author.includes(keyword)
      );
    }

    return filteredResults;
  }, [postList, page, category, keyword]);

  const ProjectList = useMemo(() => {
    const start = (page - 1) * POST_LIST_COUNT;
    const end = start + POST_LIST_COUNT;
    return filteredList.slice(start, end);
  }, [postList, page, category, keyword]);

  const PageNum = useMemo(() => {
    const count = filteredList.length / POST_LIST_COUNT;
    return Math.ceil(count);
  }, [postList, page, category, keyword]);

  return (
    <Section>
      <h2 className="text-ir">프로젝트 페이지</h2>
      {/* 상단 필터 및 검색영역 */}
      <ProjectListFilter>
        <CustomnSelectBox
          defaultText={category}
          type={"filter"}
          lists={["전체", "기획", "디자인", "프론트엔드", "백엔드"]}
          onChange={(value) => {
            handleCategoryChange(value);
          }}
        />
        <SearchForm handleSearchChange={handleSearchChange} keyword={keyword} />
      </ProjectListFilter>

      <ul>
        {ProjectList.length > 0 ? (
          ProjectList.map((e, i) => {
            return <PrjoectList dataInfo={e} key={e.id} index={i} />;
          })
        ) : (
          <p className="no-list">리스트없음</p>
        )}
      </ul>
      {ProjectList.length > 0 ? (
        <PageNav
          PageNum={PageNum}
          page={page}
          handlePageChange={handlePageChange}
        />
      ) : null}
    </Section>
  );
}

export default Project;
