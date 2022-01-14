import React, { FC, useRef, useState } from "react";
import dynamic from "next/dynamic";

const PostEditor = dynamic(() => import("../../../template/PostEditor"), {
  ssr: false,
});

const PostViewer = dynamic(() => import("../../../template/PostViewer"), {
  ssr: false,
});

interface Props {}

const PostPage: FC<Props> = () => {
  const [editorMarkDown, setEditorMarkDown] = useState("");
  const editorRef: any = useRef();

  const onChangeEvent = () => {
    setEditorMarkDown(editorRef.current.getInstance().getMarkdown());
    console.log(editorRef.current.getInstance().getMarkdown());
  };
  return (
    <>
      <PostEditor editorRef={editorRef} onChangeEvent={onChangeEvent} />
    </>
  );
};

export default PostPage;
