import { FC } from "react";
import * as S from "./style";
import Link from "next/link";

interface Props {}

const index: FC<Props> = () => {
  return (
  <S.Header>
    <Link href="/"> 
      <h1 className="headerTitle">나의 코딩일지</h1>
    </Link>
  </S.Header>
  )
};

export default index;
