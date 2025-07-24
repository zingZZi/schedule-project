import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { AuthContent } from "../Context/AuthProvider";

const PostDetailWrap = styled.section`
  max-width: 744px;
  margin: 30px auto 0;
  .category {
    font-size: 1.6rem;
  }
`;
const PostTitle = styled.h2`
  font-weight: 900;
  font-size: 2rem;
  line-height: 3rem;
  margin: 4px 0 16px;
`;
const PostInfo = styled.ul`
  display: flex;
  gap: 8px;
`;
const PostContent = styled.div`
  margin-top: 40px;
  min-height: 340px;
`;

const PostBtns = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 21px;
  border-top: 1px solid var(--white-color-500);
`;

export default function PostDetail() {
  const [postData, setPostData] = useState({});
  const postId = Math.floor(useParams().postId);
  const { user } = useContext(AuthContent);
  const [searchParams, setSearchParams] = useSearchParams();
  const urlParams = decodeURIComponent(searchParams.toString());
  useEffect(() => {
    async function post() {
      try {
        const response = await fetch(`http://localhost:3000/posts/${postId}`);
        const postData = await response.json();
        if (!response.ok) {
          console.log("서버통신오류");
        }
        setPostData(postData);
      } catch (error) {}
    }
    post();
  }, [postId]);
  return (
    <PostDetailWrap>
      <b className="category">{postData.category}</b>
      <PostTitle>{postData.title}</PostTitle>
      <PostInfo>
        <li>{postData.date}</li>
        <li>{postData.author}</li>
      </PostInfo>

      <PostContent>{postData.content}</PostContent>

      <PostBtns>
        <div>
          <Link to="" className={postId == 1 ? "disabled" : null}>
            이전
          </Link>
          <Link to="">다음</Link>
        </div>

        <div>
          {user.userId === postData.authorId ? (
            <>
              <button>수정</button>
              <button>삭제</button>
            </>
          ) : null}
          <Link to={`/project?${urlParams}`}>목록</Link>
        </div>
      </PostBtns>
    </PostDetailWrap>
  );
}
