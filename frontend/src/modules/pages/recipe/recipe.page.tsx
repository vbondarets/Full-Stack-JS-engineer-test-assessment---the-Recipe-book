/* eslint-disable @typescript-eslint/no-empty-object-type */

import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useRecipe } from "../../common/hooks/recipe.hook";
import { IBasicProps } from "../../common/types";
import { useRecipeStore } from "../../store/recipe.store";
import { Recipe } from "../../common/components/recipe";

interface IProps extends IBasicProps {}
const RecipePageContainer = ({ className }: IProps) => {
  const { id } = useParams();
  const {
    recipe,
    setCategory,
    setIngredient,
    setRegion,
    setRecipeId,
    clearRecipe,
    setRecipeCategory,
    recipeCategoryRecipes,
  } = useRecipeStore();
  useRecipe();
  const navigate = useNavigate();

  const handleClickCategory = useCallback(() => {
    setCategory(recipe?.category || "");
    navigate("/");
  }, [navigate, recipe, setCategory]);

  const handleClickRegion = useCallback(() => {
    setRegion(recipe?.region || "");
    navigate("/");
  }, [navigate, recipe, setRegion]);

  const handleClickIngredient = useCallback(
    (ingredient: string) => {
      setIngredient(ingredient);
      navigate("/");
    },
    [navigate, setIngredient]
  );

  useEffect(() => {
    setRecipeId(id || "");
  }, [id, setRecipeId]);

  useEffect(() => {
    return () => {
      setRecipeId("");
      clearRecipe();
    };
  }, [setRecipeId, clearRecipe]);

  useEffect(() => {
    if (recipe) {
      setRecipeCategory(recipe.category);
    }
  }, [recipe, setRecipeCategory]);

  return (
    <div className={className}>
      {recipe && (
        <>
          <div className="recipe-container">
            <p className="recipe-meal">{recipe.meal}</p>
            <img
              className="recipe-thumbnail"
              src={recipe.thumbnail}
              alt={recipe.meal}
            />
            <div className="recipe-info">
              <p className="recipe-region" onClick={handleClickRegion}>
                {recipe.region}
              </p>
              <p className="recipe-category" onClick={handleClickCategory}>
                {recipe.category}
              </p>
            </div>
            <div className="recipe-ingredients">
              {recipe.ingredients.map((ingredient, index) => (
                <p
                  key={index}
                  className="recipe-ingredient"
                  onClick={() => handleClickIngredient(ingredient)}
                >
                  {ingredient}
                </p>
              ))}
            </div>
            <pre className="recipe-instructions">{recipe.instructions}</pre>
            <a className="recipe-source" href={recipe.source}>
              {recipe.source}
            </a>
            <a className="recipe-youtube" href={recipe.youtube}>
              {recipe.youtube}
            </a>
          </div>
          <div className="right-sidebar">
            <div className="category-recipes-container">
              {recipeCategoryRecipes.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} size="small" />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RecipePageContainer;
