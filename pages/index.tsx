import type { NextPage } from "next";
import Main from "../components/page/mainPage/index";
import Jumbotron from "../components/common/jumbotron/index";

const Home: NextPage = () => {
  return (
    <>
      <Jumbotron />
      <Main />
    </>
  );
};

export default Home;
