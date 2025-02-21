import { BACKEND_KEYS } from "../common/consts";
import { TRecipe } from "../common/types";
import { HttpSerivce } from "./http.service";

class RecipeService extends HttpSerivce {
  constructor() {
    super();
  }

  async getAll() {
    const response = await this.get({
      url: BACKEND_KEYS.RECIPE.RECIPE_ALL,
    });
    return response.data as TRecipe[];
  }
  async getByCategory(category: string) {
    const response = await this.get({
      url: BACKEND_KEYS.RECIPE.BY_CATEGORY + category,
    });
    return response.data as TRecipe[];
  }
  async getByRegion(region: string) {
    const response = await this.get({
      url: BACKEND_KEYS.RECIPE.BY_REGION + region,
    });
    return response.data as TRecipe[];
  }
  async getByIngridient(ingridient: string) {
    const response = await this.get({
      url: BACKEND_KEYS.RECIPE.BY_INGRIDIENT + ingridient,
    });
    return response.data as TRecipe[];
  }
  async getById(id: string) {
    const response = await this.get({
      url: BACKEND_KEYS.RECIPE.RECIPE + id,
    });
    return response.data as TRecipe;
  }
  async getCategories() {
    const response = await this.get({
      url: BACKEND_KEYS.RECIPE.CATEGORY,
    });
    return response.data as string[];
  }
  async getRegions() {
    const response = await this.get({
      url: BACKEND_KEYS.RECIPE.REGION,
    });
    return response.data as string[];
  }
  async getIngridients() {
    const response = await this.get({
      url: BACKEND_KEYS.RECIPE.INGRIDIENT,
    });
    return response.data as string[];
  }
}

export const recipeService = new RecipeService();
