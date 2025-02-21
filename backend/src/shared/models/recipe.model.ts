import { TRecipe } from '../types/type';

export class RecipeResponseModel {
  public id: string;
  public meal: string;
  public category: string;
  public region: string;
  public instructions: string;
  public thumbnail: string;
  public source: string;
  public ingredients: string[];
  public tags: string;
  public youtube: string;
  public measures: string[];

  constructor(recipe: TRecipe) {
    this.id = recipe.id;
    this.meal = recipe.meal;
    this.category = recipe.category;
    this.region = recipe.region;
    this.instructions = recipe.instructions;
    this.thumbnail = recipe.thumbnail;
    this.source = recipe.source;
    this.ingredients = recipe.ingredients;
    this.tags = recipe.tags;
    this.youtube = recipe.youtube;
    this.measures = recipe.measures;
  }
}
