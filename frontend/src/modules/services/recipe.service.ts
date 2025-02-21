import { HttpSerivce } from "./http.service";

class RecipeService extends HttpSerivce {
  constructor() {
    super();
  }

  async getAll() {}
}

export const recipeService = new RecipeService();
