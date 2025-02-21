import styled from "styled-components";
import RecipePageContainer from "./recipe.page";

export const RecipePage = styled(RecipePageContainer)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  padding-inline: 80px;

  .recipe-container {
    display: flex;
    width: auto;
    max-width: 1200px;
    flex-direction: column;
    row-gap: 20px;
    height: fit-content;
    overflow: auto;
  }
  .right-sidebar {
    row-gap: 20px;
    width: 300px;
    height: 100%;
    align-items: center;
    background-color: #6d6a8d;
    overflow: scroll;
  }
  .recipe-meal {
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
  }
  .recipe-thumbnail {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
  }
  .recipe-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: auto;
    background-color: #545364;
    border-radius: 5px;
    padding: 20px;
  }
  .recipe-region {
    color: #ffffff;
    font-size: 20px;
    cursor: pointer;
  }
  .recipe-category {
    color: #ffffff;
    font-size: 20px;
    cursor: pointer;
  }
  .recipe-ingredients {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    background-color: #6d6a8d;
    border-radius: 5px;
    padding: 20px;
  }
  .recipe-ingredient {
    color: #ffffff;
    font-size: 20px;
    cursor: pointer;
  }
  .recipe-instructions {
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow: auto;
    max-width: 100%;
  }
  .category-recipes-container {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    height: fit-content;
    padding-block: 10px;
  }
`;
