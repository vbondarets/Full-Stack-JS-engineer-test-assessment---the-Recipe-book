import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";
import { TRecipe } from "../common/types";

interface IRecipeState {
  recipes: TRecipe[];
  setRecipes: (value: TRecipe[]) => void;
  recipe: TRecipe | null;
  setRecipe: (value: TRecipe) => void;
  category: string;
  setCategory: (value: string) => void;
  region: string;
  setRegion: (value: string) => void;
  ingredients: string;
  setIngredients: (value: string) => void;
}

export const useRecipeStore = createWithEqualityFn<IRecipeState>((set) => {
  return {
    recipes: [],
    recipe: null,
    sort: "default",
    category: "",
    region: "",
    ingredients: "",
    setRecipes: (value: TRecipe[]): void => {
      set(() => {
        return {
          recipes: value,
        };
      });
    },
    setRecipe: (value: TRecipe): void => {
      set(() => {
        return {
          recipe: value,
        };
      });
    },
    setCategory: (value: string): void => {
      set(() => {
        return {
          category: value,
        };
      });
    },
    setRegion: (value: string): void => {
      set(() => {
        return {
          region: value,
        };
      });
    },
    setIngredients: (value: string): void => {
      set(() => {
        return {
          ingredients: value,
        };
      });
    },
  };
}, shallow);
