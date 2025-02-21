/* eslint-disable @typescript-eslint/no-empty-object-type */

import { useRecipe } from "../../common/hooks/recipe.hook";
import { IBasicProps } from "../../common/types";

interface IProps extends IBasicProps {}
const MainPageContainer = ({ className }: IProps) => {
  useRecipe();
  return (
    <div className={className}>
      <div className="main-container">{"/main"}</div>
    </div>
  );
};

export default MainPageContainer;
