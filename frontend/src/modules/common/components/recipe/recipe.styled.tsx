import styled from "styled-components";
import { RecipeComponent } from "./recipe.component";

export const Recipe = styled(RecipeComponent)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin: auto;
  .recipe-container {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #545364;
    width: 90%;
    height: 90%;
    align-items: center;
  }
  .recipe-meal {
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
  .recipe-thumbnail {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 5px;
  }
`;
