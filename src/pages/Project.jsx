import styled from "styled-components";
import CustomnSelectBox from "../components/CustomSelectBox";
import {  useEffect,useMemo,useRef,useState } from "react";
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
  const [changeFilter, setChangeFilter] = useState('');
  const [currentPage,setCurrentPage] = useState(0);
  const [searchKeyword,setSearchKeyword] = useState('')
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
        throw new Error(error)
      }
    };
    projectList();
  },[]);

  const filteredPostList = useMemo(()=>{
    //카테고리별 리스트 필터링기능
    const lists = 
    changeFilter===''|| changeFilter==='전체'
    ?postList
    :postList.filter((e)=>e.category === changeFilter)
    //페이지 갯수체크
    const start = currentPage * POST_LIST_COUNT;
    const end = currentPage+start + POST_LIST_COUNT;
    return lists.slice(start,end)
  },[postList,changeFilter,currentPage]);

  const PageNum = useMemo(()=>{
    const count = changeFilter===''|| changeFilter==='전체'
    ?postList.length/POST_LIST_COUNT
    :postList.filter((e)=>e.category === changeFilter).length/POST_LIST_COUNT;
    return Math.round(count)
  },[filteredPostList,postList])

  const keyWordCheckList = useMemo(()=>{
    return filteredPostList.filter((e)=>e.title.includes(searchKeyword))
  },[searchKeyword]);
  console.log(keyWordCheckList)
  return (
    <Section>
      <h2 className="text-ir">프로젝트 페이지</h2>
      {/* 상단 필터 및 검색영역 */}
      <ProjectListFilter>
        <CustomnSelectBox 
        defaultText={'전체'} 
        type={'filter'} 
        lists={["전체", "기획", "디자인", "프론트엔드", "백엔드"]}
        onChange={(value) => {
          setChangeFilter(value); 
          setCurrentPage(0)
        }}
      />
        <SearchForm setSearchKeyword={setSearchKeyword}/>
      </ProjectListFilter>
      
      <ul>
        {filteredPostList.map((e) => {
          return <PrjoectList dataInfo={e} key={e.id} />;
        })}
      </ul>

      <PageNav PageNum={PageNum} currentPage={currentPage} setCurrentPage={setCurrentPage}/>

    </Section>
  );
}

export default Project;
