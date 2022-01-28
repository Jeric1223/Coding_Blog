import {FC} from 'react';
import * as S from "./style";

interface Props {
    onChangeTitle: any
}

const PostTitleWrapper:FC<Props> = (props) => {
    const { onChangeTitle } = props;

    return (
        <S.MainWrapper onChange={onChangeTitle}>
            <input type="text" placeholder='제목을 입력해 주세요' name="title" /> 
            <input type="text" placeholder='부제목을 입력해 주세요' name="subtitle" /> 
        </S.MainWrapper>
    );
};

export default PostTitleWrapper;