import React, { FC, useEffect } from "react";
import * as S from "./style";
import { atom, useAtom } from 'jotai';
import { atomWithStorage } from "jotai/utils"

interface Props {
  editorMarkDown: string;
}

const darkModeAtom = atomWithStorage('postItem', "[]")

const ButtonWrapper: FC<Props> = (props) => {
  const { editorMarkDown } = props;

  const [postItem, setPostItem] = useAtom(darkModeAtom)

  return (
    <S.PostButtonWrapper>
      <button
        onClick={() => {
          let newArray = JSON.parse(postItem)
          newArray.push(editorMarkDown)
          setPostItem(JSON.stringify(newArray))
        }}
      >
        작성완료
      </button>
    </S.PostButtonWrapper>
  );
};

export default ButtonWrapper;
