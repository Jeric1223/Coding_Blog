import styled from "@emotion/styled";

export const JumbotronNav = styled.nav`
  width: 100%;
  height: 295px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("/jumbotron.png");
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 3rem;
`;

export const JumbotronTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 15%;
  & > * {
    color: white;
    font-family: "Noto Serif KR", serif;
  }
  & h1 {
    font-size: 3.5rem;
    font-weight: 500;
  }
  & p {
    font-size: 1.25rem;
  }
`;
