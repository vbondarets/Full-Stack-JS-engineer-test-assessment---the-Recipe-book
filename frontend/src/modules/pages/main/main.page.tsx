/* eslint-disable @typescript-eslint/no-empty-object-type */

import { Selector } from "../../common/components/selector";
import { useRecipe } from "../../common/hooks/recipe.hook";
import { IBasicProps } from "../../common/types";
import { useRecipeStore } from "../../store/recipe.store";

interface IProps extends IBasicProps {}
const MainPageContainer = ({ className }: IProps) => {
  useRecipe();
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
  } = useRecipeStore();
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
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MainPageContainer;
