import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";
import { TRecipe } from "../common/types";

interface IRecipeState {
  recipes: TRecipe[];
  setRecipes: (value: TRecipe[]) => void;
  recipe: TRecipe | null;
  setRecipe: (value: TRecipe | null) => void;
  category: string;
  setCategory: (value: string) => void;
  region: string;
  setRegion: (value: string) => void;
  ingredient: string;
  setIngredient: (value: string) => void;
  categories: string[];
  setCategories: (value: string[]) => void;
  regions: string[];
  setRegions: (value: string[]) => void;
  ingredients: string[];
  setIngredients: (value: string[]) => void;
  recipeId: string;
  setRecipeId: (value: string) => void;
}

export const useRecipeStore = createWithEqualityFn<IRecipeState>((set) => {
  return {
    recipes: [],
    recipe: null,
    sort: "default",
    category: "",
    region: "",
    ingredient: "",
    categories: [],
    regions: [],
    ingredients: [],
    recipeId: "",
    setRecipeId: (value: string): void => {
      set(() => {
        return {
          recipeId: value,
        };
      });
    },
    setRecipes: (value: TRecipe[]): void => {
      set(() => {
        return {
          recipes: value,
        };
      });
    },
    setRecipe: (value: TRecipe | null): void => {
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
          region: "",
          ingredient: "",
        };
      });
    },
    setRegion: (value: string): void => {
      set(() => {
        return {
          region: value,
          category: "",
          ingredient: "",
        };
      });
    },
    setIngredient: (value: string): void => {
      set(() => {
        return {
          ingredient: value,
          category: "",
          region: "",
        };
      });
    },
    setCategories: (value: string[]): void => {
      set(() => {
        return {
          categories: value,
        };
      });
    },
    setRegions: (value: string[]): void => {
      set(() => {
        return {
          regions: value,
        };
      });
    },
    setIngredients: (value: string[]): void => {
      set(() => {
        return {
          ingredients: value,
        };
      });
    },
  };
}, shallow);
