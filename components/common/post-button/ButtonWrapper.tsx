import React, { FC } from "react";
import * as S from "./style";

interface Props {
  editorMarkDown: string;
}

const ButtonWrapper: FC<Props> = (props) => {
  const { editorMarkDown } = props;
  return (
    <S.PostButtonWrapper>
      <button
        onClick={() => {
          console.log(editorMarkDown);
        }}
      >
        작성완료
      </button>
    </S.PostButtonWrapper>
  );
};

export default ButtonWrapper;
