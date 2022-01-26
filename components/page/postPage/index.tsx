import React, { FC, useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "../../common/header/index";
import ButtonWrapper from "../../common/post-button/ButtonWrapper";


const PostEditor = dynamic(() => import("../../../template/PostEditor"), {
  ssr: false,
});

const PostViewer = dynamic(() => import("../../../template/PostViewer"), {
  ssr: false,
});


interface Props {}

const PostPage: FC<Props> = () => {
  const [editorMarkDown, setEditorMarkDown] = useState("");


  useEffect(() => {
    console.log(editorMarkDown);
  }, [editorMarkDown]);

  const editorRef: any = useRef();

  const onChangeEvent = () => {
    setEditorMarkDown(editorRef.current.getInstance().getMarkdown());
  };

  return (
    <>
      <Header />
      <PostEditor editorRef={editorRef} onChangeEvent={onChangeEvent} />
      <ButtonWrapper editorMarkDown={editorMarkDown} />
    </>
  );
};

export default PostPage;
