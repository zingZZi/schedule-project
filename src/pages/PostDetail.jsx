import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const PostDetailWrap = styled.section`
  max-width: 744px;
  margin: 0 auto;
`;
const PostContent = styled.div``;

export default function PostDetail() {
  const [postData, setPostData] = useState({});
  const postId = useParams().postId;
  async function post() {
    try {
      const response = await fetch(`http://localhost:3000/posts/${postId}`);
      const postData = await response.json();
      if (!response.ok) {
        console.log("서버통신오류");
      }
      setPostData(postData);
      console.log(postData);
    } catch (error) {}
  }
  useEffect(() => {
    post();
  }, []);
  return (
    <PostDetailWrap>
      <b>{postData.category}</b>
      <h2>{postData.title}</h2>
      <p>
        <span>{postData.date}</span>
        <span>{postData.author}</span>
      </p>

      <PostContent>{postData.content}</PostContent>
    </PostDetailWrap>
  );
}
