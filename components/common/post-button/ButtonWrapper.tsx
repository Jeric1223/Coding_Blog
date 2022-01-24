import React, { FC } from "react";
import * as S from "./style";

interface Props {}

const ButtonWrapper: FC<Props> = () => {
  return (
    <S.PostButtonWrapper>
      <button
        onClick={() => {
          console.log(`Click!`);
        }}
      >
        작성완료
      </button>
    </S.PostButtonWrapper>
  );
};

export default ButtonWrapper;
