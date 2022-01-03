import { FC, useEffect, useState } from "react";
import * as S from "./style";
import Image from "next/image";

interface Props {}

const Jumbotron: FC<Props> = () => {
  return (
    <>
      <S.JumbotronNav>
        <S.JumbotronTitle>
          <h1>나의 코딩 일지</h1>
          <p>
            이 사이트는 코딩을 배우면서 내가 무엇을 하였는지 일지를 쓰는
            사이트입니다.
          </p>
        </S.JumbotronTitle>
      </S.JumbotronNav>
    </>
  );
};

export default Jumbotron;
