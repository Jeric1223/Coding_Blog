import { FC } from "react";
import Jumbotron from "../../common/jumbotron";
import DiaryList from "../../common/diaryList";

interface Props {}

const index: FC<Props> = () => {
  return (
    <>
      <Jumbotron />
      <DiaryList />
    </>
  );
};

export default index;
