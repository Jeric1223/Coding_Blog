import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import * as S from "./style";
import ListItem from "./ListItem";

interface Props {}

const DiaryList: FC<Props> = () => {
  return (
    <S.MainSection>
      <S.WriteArticle>
        <S.ListHeader>
          <h3>일지</h3>
          <Link href="/post">
            <button>작성</button>
          </Link>
        </S.ListHeader>
        <S.ListArticle>
          <ListItem />
        </S.ListArticle>
      </S.WriteArticle>
    </S.MainSection>
  );
};

export default DiaryList;
