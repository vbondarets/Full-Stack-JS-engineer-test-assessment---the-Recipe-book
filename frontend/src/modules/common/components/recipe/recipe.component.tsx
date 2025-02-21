import { IBasicProps } from "../../types/props.types";
import { TRecipe } from "../../types";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

interface IProps extends IBasicProps {
  recipe: TRecipe;
  size?: "default" | "small";
}

export const RecipeComponent = ({
  className,
  recipe,
  size = "default",
}: IProps) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/recipe/${recipe.id}`);
  }, [recipe.id, navigate]);

  return (
    <div
      className={`${className} ${size === "small" && "small"}`}
      onClick={handleClick}
    >
      <div className="recipe-item-container">
        <p className="recipe-item-meal">{recipe.meal}</p>
        <img
          className="recipe-item-thumbnail"
          src={recipe.thumbnail}
          alt={recipe.meal}
        />
      </div>
    </div>
  );
};
