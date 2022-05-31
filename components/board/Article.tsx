import { IArticle } from "@/types";
import React from "react";

type Props = {
    article: IArticle
    deletePost:(id:number)=>void
}

const Article : React.FC<Props> = ({article,deletePost}) =>{
    
    return (
      <>
        <h1>게시글</h1>
        <h3>글번호:{article.artId}</h3>
        <h3>제목:{article.title}</h3>
        <h3>내용:{article.content}</h3>

        <button onClick= {()=>deletePost(article.artId)}>삭제</button>
      
      </>
    );
  };

  export default Article