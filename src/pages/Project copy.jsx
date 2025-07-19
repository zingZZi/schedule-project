import styled from "styled-components";
import PageNav from "../components/PageNav";
import CustomnSelectBox from "../components/CustomSelectBox";
import { useSelectHook } from "../hooks/useSelectHook";
import { use, useEffect, useMemo, useRef, useState } from "react";
import PrjoectList from "../components/ProjectList";
import SearchForm from "../components/SearchForm";
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
  const lists = ["전체", "기획", "디자인", "프론트엔드", "백엔드"];
  const [postList, setPostList] = useState([]);
  const ITEMS_PER_PAGE = 10;
  const [currentPage,setcurrentPage] = useState(0);
  const { toggle, isOpen, selectedText, listSelect, componentRef } =
    useSelectHook({
      type: "filter",
      defaultText: "전체",
    });

  const filteredPostList = useMemo(() => {
    const filterTotalLists = selectedText === "전체"
      ? postList
      : postList.filter((e) => e.category === selectedText)
    return filterTotalLists.slice(currentPage,currentPage + ITEMS_PER_PAGE)
  }, [postList, selectedText,currentPage]);

  const pageNavTotalNum = useMemo(()=>{
    return postList.length / ITEMS_PER_PAGE
  },[postList,])

  console.log(postList)

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
      } catch (error) {
        throw new Error(error)
      }
    };
    projectList();
  },[]);

  return (
    <Section>
      <h2 className="text-ir">프로젝트 페이지</h2>
      {/* 상단 필터 및 검색영역 */}
      <ProjectListFilter>
        <CustomnSelectBox
          lists={lists}
          toggle={toggle}
          isOpen={isOpen}
          selectedText={selectedText}
          listSelect={listSelect}
          componentRef={componentRef}
        />

        <SearchForm />
      </ProjectListFilter>
      
      {/* 데이터 리스트 */}
      <ul>
        {filteredPostList.map((e) => {
          return <PrjoectList dataInfo={e} key={e.id} />;
        })}
      </ul>

      <PageNav pageNavTotalNum={pageNavTotalNum} />
    </Section>
  );
}

export default Project;
