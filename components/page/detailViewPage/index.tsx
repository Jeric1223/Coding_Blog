import { FC } from "react";
import dynamic from "next/dynamic";
import Header from "../../common/header/index";
import { mdData } from "../../../data";

const PostViewer = dynamic(() => import("../../../template/PostViewer"), {
  ssr: false,
});

interface Props {}

const DetailViewPage: FC<Props> = (props) => {
  return (
    <>
      <Header />
      <PostViewer editorMarkDown={mdData} />
    </>
  );
};

export default DetailViewPage;
