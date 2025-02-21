import styled from "styled-components";
import { RecipeComponent } from "./recipe.component";

export const Recipe = styled(RecipeComponent)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin: auto;
  &.small {
    width: 150px;
    height: 150px;
  }

  .recipe-item-container {
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
  .recipe-item-meal {
    width: 80%;
    color: white;
    font-size: 20px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &.small {
      font-size: 15px;
    }
  }
  .recipe-item-thumbnail {
    width: 50%;
    height: 50%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
