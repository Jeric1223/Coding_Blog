import React, { FC, useEffect, useState } from "react";
import * as S from "./style";
import { atom, useAtom } from 'jotai';
import { atomWithStorage } from "jotai/utils"

interface Props {
  editorMarkDown: string;
  postTitleAndSubtitle: { title: string, subtitle: string }
}

const darkModeAtom = atomWithStorage('postItem', "[]")

const ButtonWrapper: FC<Props> = (props) => {
  const { editorMarkDown, postTitleAndSubtitle } = props;
  const [postItem, setPostItem] = useAtom(darkModeAtom);
  const [today, setToday] = useState<string>("");

  useEffect(() => {
    todayDate()
    console.log(JSON.parse(postItem))
  },[])

  const todayDate = () => {
    let today = new Date(); 
    setToday(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`)  
  }

  const titleCheckFunc = () => {
    const { title, subtitle } = postTitleAndSubtitle;
    if(title.length <= 0 ) {
      alert('제목을 입력해 주세요.')
      return false
    }
    if(subtitle.length <= 0 ) {
      alert('부제목을 입력해 주세요.')
      return false
    }
    else {
      return true
    }
  }

  return (
    <S.PostButtonWrapper>
      <button
        onClick={() => {
          if(titleCheckFunc()){
            let newArray = JSON.parse(postItem)
            newArray.push({editorMarkDown:editorMarkDown, title:postTitleAndSubtitle.title, subtitle:postTitleAndSubtitle.subtitle, date: today})
            setPostItem(JSON.stringify(newArray))
          }
        }}
      >
        작성완료
      </button>
    </S.PostButtonWrapper>
  );
};

export default ButtonWrapper;
