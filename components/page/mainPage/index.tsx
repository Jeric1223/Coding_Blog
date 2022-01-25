import { FC } from "react";

import Jumbotron from "../../common/jumbotron";
import DiaryList from "../../common/diaryList";

interface Props {}

const MainPage: FC<Props> = () => {
  return (
    <>
      <Jumbotron />
      <DiaryList />
    </>
  );
};

export default MainPage;
