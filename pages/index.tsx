import type { NextPage } from "next";
import Main from "../components/page/mainPage/index";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>나의 코딩일지</title>
        <link rel="icon" href="/headIcon.png" />
      </Head>
      <Main />
    </>
  );
};

export default Home;
