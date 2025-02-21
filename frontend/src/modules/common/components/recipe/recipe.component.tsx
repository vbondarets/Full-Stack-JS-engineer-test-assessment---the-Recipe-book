import { IBasicProps } from "../../types/props.types";
import { TRecipe } from "../../types";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

interface IProps extends IBasicProps {
  recipe: TRecipe;
}

export const RecipeComponent = ({ className, recipe }: IProps) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/recipe/${recipe.id}`);
  }, [recipe.id, navigate]);

  return (
    <div className={className} onClick={handleClick}>
      <div className="recipe-container">
        <p className="recipe-meal">{recipe.meal}</p>
        <img
          className="recipe-thumbnail"
          src={recipe.thumbnail}
          alt={recipe.meal}
        />
      </div>
    </div>
  );
};
