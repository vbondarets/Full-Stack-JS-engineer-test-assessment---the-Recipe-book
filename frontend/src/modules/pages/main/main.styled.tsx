import styled from "styled-components";
import MainPageContainer from "./main.page";

export const MainPage = styled(MainPageContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .main-container {
    display: flex;
    width: 100%;
    max-width: 1200px;
    flex-direction: column;
  }
  .selectors-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-block: 20px;
  }
`;
