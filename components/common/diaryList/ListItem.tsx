import React, { FC } from "react";
import * as S from "./style";

interface Props {}

const ListItem: FC<Props> = () => {
  return (
    <S.ListItem>
      <span>FrontEnd</span>
      <S.ListItemContent>
        <div>
          <h1>REACT 버전 18, 놀라운 기능!!</h1>
          <p>안녕하세요 오늘은 React 버전 18에 대해서 알아보겠습니다.</p>
        </div>
        <div>
          <span>Jeric Kim</span>
          <span>2022-12-23</span>
        </div>
      </S.ListItemContent>
    </S.ListItem>
  );
};

export default ListItem;
