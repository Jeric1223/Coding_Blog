import styled from "@emotion/styled";

export const MainSection = styled.section`
  width: 55%;
  display: flex;
  margin: 0 auto;
`;

export const WriteArticle = styled.article`
  width: 100%;
  background-color: white;
  & h3 {
    font-family: "Noto Serif KR", serif;
    font-size: 2rem;
    border-bottom: 2px solid black;
  }
`;

export const ListHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  & > button {
    width: 72px;
    height: 38px;
    background-color: black;
    border-radius: 0.25rem;
    color: white;
    font-family: "NanumSquare", sans-serif;
    font-size: 17px;
  }
`;

export const ListArticle = styled.article`
  width: 100%;
  height: auto;
  & div:nth-of-type(1) {
    margin-top: 23px;
  }
`;


export const ListItem = styled.div`
  width: 100%;
  height: 183px;
  padding: 0 0 30px 0;
  margin: 0 0 30px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background-color: black;
`;

export const ListItemContent = styled.div`

`