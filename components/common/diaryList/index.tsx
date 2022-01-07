import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import * as S from "./style";

interface Props {}

const DiaryList: FC<Props> = () => {
  return (
    <>
      <S.MainSection>
        <S.WriteArticle>
          <S.ListHeader>
            <h3>일지</h3>
            <Link href="#">
              <button>작성</button>
            </Link>
          </S.ListHeader>
        </S.WriteArticle>
      </S.MainSection>
    </>
  );
};

export default DiaryList;
