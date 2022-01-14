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
`;

export const ListItem = styled.div`
  cursor: pointer;
  width: 100%;
  height: 150px;
  padding: 0 10px 30px 10px;
  margin: 0 0 30px 0;
  &:nth-of-type(1) {
    margin-top: 45px;
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .field {
    font-family: "Poppins", "Noto Sans KR", sans-serif;
    font-weight: bold;
    color: rgb(103, 179, 147);
    font-size: 16px;
  }
`;

export const ListItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  & .listItemTitleDiv {
    h1 {
      color: #101010;
      font-size: 2.1rem;
      font-weight: bold;
      font-family: "Poppins", "Noto Sans KR", sans-serif;
    }
    p {
      font-family: "Poppins", "Noto Sans KR", sans-serif;
      color: #808080;
      font-size: 18px;
    }
  }
  & .listItemDateDiv {
    align-items: flex-end;
    span {
      font-family: "Poppins", "Noto Sans KR", sans-serif;
      color: #808080;
      font-size: 14px;
    }
    span:nth-of-type(1) {
      font-weight: bold;
      font-size: 18px !important;
    }
  }
`;
