import { TMealAPIResponse, TRecipe } from '../types/type';

export const refactorMealAPIResponse = (
  apiResponse: TMealAPIResponse,
): TRecipe[] => {
  const refactoredRecipes = apiResponse.meals.map((meal) => {
    const ingredients: string[] = [];
    const measures: string[] = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = (meal as any)[`strIngredient${i}`] as string;
      const measure = (meal as any)[`strMeasure${i}`] as string;

      if (ingredient && ingredient.trim() !== '') {
        ingredients.push(ingredient.trim());
        measures.push(measure ? measure.trim() : '');
      }
    }

    return {
      id: meal.idMeal,
      meal: meal.strMeal,
      category: meal.strCategory,
      region: meal.strArea,
      instructions: meal.strInstructions,
      thumbnail: meal.strMealThumb || '',
      source: meal.strSource,
      ingredients,
      tags: meal.strTags || '',
      youtube: meal.strYoutube,
      measures,
    };
  });

  return refactoredRecipes;
};
