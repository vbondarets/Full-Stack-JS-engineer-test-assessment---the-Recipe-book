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
    align-items: center;
  }
  .selectors-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-block: 20px;
    align-items: center;
  }
  .recipes-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    width: 100%;
  }
  .reset-button {
    background-color: #545364;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    width: 100px;
  }
`;
