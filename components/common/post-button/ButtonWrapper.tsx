import React, { FC } from "react";
import * as S from "./style";
import { atom, useAtom } from 'jotai';
import { atomWithStorage } from "jotai/utils"

interface Props {
  editorMarkDown: string;
}

const darkModeAtom = atomWithStorage('isDone', false)

const ButtonWrapper: FC<Props> = (props) => {
  const { editorMarkDown } = props;
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)

  return (
    <S.PostButtonWrapper>
      <button
        onClick={() => {
          console.log(editorMarkDown)
          setDarkMode(!darkMode)
          console.log(darkMode)
        }}
      >
        작성완료
      </button>
    </S.PostButtonWrapper>
  );
};

export default ButtonWrapper;
