import { TRecipe } from '../types/type';

export class RecipeResponseModel {
  public id: string;

  constructor(recipe: TRecipe) {
    this.id = recipe.id;
  }
}
