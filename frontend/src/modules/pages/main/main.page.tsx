/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Recipe } from "../../common/components/recipe/recipe.styled";
import { Selector } from "../../common/components/selector";
import { useRecipe } from "../../common/hooks/recipe.hook";
import { IBasicProps } from "../../common/types";
import { useRecipeStore } from "../../store/recipe.store";
import { text } from "../../common/consts";
import { useCallback } from "react";

interface IProps extends IBasicProps {}
const MainPageContainer = ({ className }: IProps) => {
  const { refetchAll } = useRecipe();
  const {
    regions,
    region,
    categories,
    category,
    ingredients,
    ingredient,
    setRegion,
    setCategory,
    setIngredient,
    recipes,
    reset,
  } = useRecipeStore();

  const handleReset = useCallback(() => {
    reset();
    refetchAll();
  }, [reset, refetchAll]);

  return (
    <div className={className}>
      <div className="main-container">
        <div className="selectors-container">
          <Selector
            values={regions}
            value={region}
            label="Region"
            onChange={setRegion}
          />
          <Selector
            values={categories}
            value={category}
            label="Category"
            onChange={setCategory}
          />
          <Selector
            values={ingredients}
            value={ingredient}
            label="Ingredient"
            onChange={setIngredient}
          />
          <button className="reset-button" onClick={handleReset}>
            {text.reset}
          </button>
        </div>
        <div className="recipes-container">
          {recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPageContainer;
