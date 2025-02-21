import { Inject, Injectable } from '@nestjs/common';

import { cacheConsts } from '../../shared/constants/cache.const';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../generated/i18n.generated';
import { ErrorService } from '../error/error.service';
import { RecipeResponseModel } from '../../shared/models/recipe.model';
import { AxiosService } from '../axios/axios.service';
import { recipesUrlConsts } from '../../shared/constants/recipe-url.const';
import {
  TCategoryAPIResponse,
  TIngredientAPIResponse,
  TMealAPIResponse,
  TRegionAPIResponse,
} from '../../shared/types/type';
import { refactorMealAPIResponse } from '../../shared/utils/recipe-refactor.util';

@Injectable()
export class RecipeService {
  constructor(
    private readonly i18n: I18nService<I18nTranslations>,
    private readonly errorService: ErrorService,
    private readonly axiosService: AxiosService,
    @Inject(CACHE_MANAGER) private readonly cacheService: Cache,
  ) {}

  //#region Recipe

  public async getAll(): Promise<RecipeResponseModel[]> {
    const cashedRecipes = await this.cacheService.get<RecipeResponseModel[]>(
      cacheConsts.allRecipes,
    );
    if (!cashedRecipes) {
      const recipes = await this.axiosService.sendGetRequest<TMealAPIResponse>(
        `${process.env.RECIPE_API_URL}${recipesUrlConsts.allRecipes}`,
      );
      if (!recipes) {
        throw await this.errorService.notFound([
          { key: 'errors.recipesNotFound' },
        ]);
      }
      const refactoredRecipes = refactorMealAPIResponse(recipes);
      const transformedRecipes = refactoredRecipes.map((recipe) => {
        return new RecipeResponseModel(recipe);
      });
      await this.cacheService.set(cacheConsts.allRecipes, transformedRecipes);
      return transformedRecipes;
    }
    return cashedRecipes;
  }

  public async getAllByIngredient(
    ingredient: string,
  ): Promise<RecipeResponseModel[]> {
    const cashedIngredients = await this.cacheService.get<string[]>(
      cacheConsts.recipeIngredients,
    );
    if (cashedIngredients && !cashedIngredients.includes(ingredient)) {
      throw await this.errorService.notFound([
        { key: 'errors.ingredientNotFound' },
      ]);
    }
    const cashedRecipes = await this.cacheService.get<RecipeResponseModel[]>(
      cacheConsts.allByIngredient + ingredient,
    );
    if (!cashedRecipes) {
      const recipes = await this.axiosService.sendGetRequest<TMealAPIResponse>(
        process.env.RECIPE_API_URL +
          recipesUrlConsts.allByIngredient +
          ingredient,
      );
      if (!recipes) {
        throw await this.errorService.notFound([
          { key: 'errors.recipesNotFound' },
        ]);
      }
      const refactoredRecipes = refactorMealAPIResponse(recipes);
      const transformedRecipes = refactoredRecipes.map((recipe) => {
        return new RecipeResponseModel(recipe);
      });
      await this.cacheService.set(
        cacheConsts.allByIngredient,
        transformedRecipes,
      );
      return transformedRecipes;
    }
    return cashedRecipes;
  }

  public async getAllByCategory(
    category: string,
  ): Promise<RecipeResponseModel[]> {
    const cashedCategories = await this.cacheService.get<string[]>(
      cacheConsts.recipeCategories,
    );
    if (cashedCategories && !cashedCategories.includes(category)) {
      throw await this.errorService.notFound([
        { key: 'errors.ingredientNotFound' },
      ]);
    }
    const cashedRecipes = await this.cacheService.get<RecipeResponseModel[]>(
      cacheConsts.allByCategory + category,
    );
    if (!cashedRecipes) {
      const recipes = await this.axiosService.sendGetRequest<TMealAPIResponse>(
        `${process.env.RECIPE_API_URL}${recipesUrlConsts.allByCategory}${category}`,
      );
      if (!recipes) {
        throw await this.errorService.notFound([
          { key: 'errors.recipesNotFound' },
        ]);
      }
      const refactoredRecipes = refactorMealAPIResponse(recipes);
      const transformedRecipes = refactoredRecipes.map((recipe) => {
        return new RecipeResponseModel(recipe);
      });
      await this.cacheService.set(
        cacheConsts.allByCategory + category,
        transformedRecipes,
      );
      return transformedRecipes;
    }
    return cashedRecipes;
  }

  public async getAllByRegion(region: string): Promise<RecipeResponseModel[]> {
    const cashedRegions = await this.cacheService.get<string[]>(
      cacheConsts.recipeRegions,
    );
    if (cashedRegions && !cashedRegions.includes(region)) {
      throw await this.errorService.notFound([
        { key: 'errors.regionNotFound' },
      ]);
    }
    const cashedRecipes = await this.cacheService.get<RecipeResponseModel[]>(
      cacheConsts.allByRegion + region,
    );
    if (!cashedRecipes) {
      const recipes = await this.axiosService.sendGetRequest<TMealAPIResponse>(
        `${process.env.RECIPE_API_URL}${recipesUrlConsts.allByRegion}${region}`,
      );
      if (!recipes) {
        throw await this.errorService.notFound([
          { key: 'errors.recipesNotFound' },
        ]);
      }
      const refactoredRecipes = refactorMealAPIResponse(recipes);
      const transformedRecipes = refactoredRecipes.map((recipe) => {
        return new RecipeResponseModel(recipe);
      });
      await this.cacheService.set(
        cacheConsts.allByRegion + region,
        transformedRecipes,
      );
      return transformedRecipes;
    }
    return cashedRecipes;
  }

  public async getById(id: string): Promise<RecipeResponseModel> {
    const cashedRecipe = await this.cacheService.get<RecipeResponseModel>(
      cacheConsts.recipeById + id,
    );
    if (!cashedRecipe) {
      const recipe = await this.axiosService.sendGetRequest<TMealAPIResponse>(
        `${process.env.RECIPE_API_URL}${recipesUrlConsts.oneById}${id}`,
      );
      if (!recipe) {
        throw await this.errorService.notFound([
          { key: 'errors.recipeNotFound' },
        ]);
      }
      const refactoredRecipe = refactorMealAPIResponse(recipe);
      const transformedRecipe = new RecipeResponseModel(refactoredRecipe[0]!);
      await this.cacheService.set(
        cacheConsts.recipeById + id,
        transformedRecipe,
      );
      return transformedRecipe;
    }
    return cashedRecipe;
  }

  public async seedRegions(): Promise<void> {
    const allRegions =
      await this.axiosService.sendGetRequest<TRegionAPIResponse>(
        `${process.env.RECIPE_API_URL}${recipesUrlConsts.allRegions}`,
      );
    if (allRegions) {
      const regions = allRegions.meals.map((region) => region.strArea);
      await this.cacheService.set(cacheConsts.recipeRegions, regions);
    }
  }

  public async seedCategories(): Promise<void> {
    const allCategories =
      await this.axiosService.sendGetRequest<TCategoryAPIResponse>(
        `${process.env.RECIPE_API_URL}${recipesUrlConsts.allCategories}`,
      );
    if (allCategories) {
      const categories = allCategories.meals.map(
        (category) => category.strCategory,
      );
      await this.cacheService.set(cacheConsts.recipeCategories, categories);
    }
  }

  public async seedIngredients(): Promise<void> {
    const allIngredients =
      await this.axiosService.sendGetRequest<TIngredientAPIResponse>(
        `${process.env.RECIPE_API_URL}${recipesUrlConsts.allIngredients}`,
      );
    if (allIngredients) {
      const ingredients = allIngredients.meals.map(
        (ingredient) => ingredient.strIngredient,
      );
      await this.cacheService.set(cacheConsts.recipeIngredients, ingredients);
    }
  }

  //#endregion Recipe
}
