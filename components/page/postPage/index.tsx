import React, { FC, useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "../../common/header/index";
import ButtonWrapper from "../../common/post-button/ButtonWrapper";
import PostTitleWrapper from "../../common/post-title-wrapper/PostTitleWrapper";


const PostEditor = dynamic(() => import("../../../template/PostEditor"), {
  ssr: false,
});


interface Props {}

const PostPage: FC<Props> = () => {
  const [editorMarkDown, setEditorMarkDown] = useState("");
  const [postTitleAndSubtitle, setPostTitleAndSubtitle] = useState(
    {
      title: "",
      subtitle: ""
    }
  )

  useEffect(() => {
    console.log(postTitleAndSubtitle);
  }, [postTitleAndSubtitle]);

  const editorRef: any = useRef();

  const onChangeContent= () => {
    setEditorMarkDown(editorRef.current.getInstance().getMarkdown());
  };

  const onChangeTitle = (e:any) => {
    const { value, name } = e.target;
    setPostTitleAndSubtitle({
      ...postTitleAndSubtitle,
      [name]: value
    })
  }

  return (
    <>
      <Header />
      <PostTitleWrapper onChangeTitle={onChangeTitle}  />
      <PostEditor editorRef={editorRef} onChangeEvent={onChangeContent} />
      <ButtonWrapper editorMarkDown={editorMarkDown} postTitleAndSubtitle={postTitleAndSubtitle} />
    </>
  );
};

export default PostPage;
