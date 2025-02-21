import { useQuery } from "react-query";
import { QUERY_KEYS } from "../consts/query.keys";
import { isAxiosError } from "axios";
import Swal from "sweetalert2";
import { useRecipeStore } from "../../store/recipe.store";
import { recipeService } from "../../services/recipe.service";

export const useRecipe = () => {
  const {
    region,
    category,
    ingredient,
    recipeId,
    setCategories,
    setIngredients,
    setRecipe,
    setRecipes,
    setRegions,
  } = useRecipeStore();

  useQuery({
    queryKey: [QUERY_KEYS.RECIPES],
    queryFn: async () => recipeService.getAll(),
    onSuccess: (data) => {
      setRecipes(data);
    },
    onError: (error) => {
      setRecipes([]);
      if (isAxiosError(error)) {
        Swal.fire({
          icon: "error",
          title: "Request error",
          text: error.response?.data.messages[0] as string,
        });
      }
    },
    refetchOnMount: true,
    retry: false,
    refetchOnWindowFocus: false,
  });

  useQuery({
    queryKey: [category],
    queryFn: async () =>
      category ? recipeService.getByCategory(category) : null,
    onSuccess: (data) => {
      if (data) setRecipes(data);
    },
    refetchOnMount: false,
    retry: false,
    refetchOnWindowFocus: false,
  });

  useQuery({
    queryKey: [region],
    queryFn: async () => (region ? recipeService.getByRegion(region) : null),
    onSuccess: (data) => {
      if (data) setRecipes(data);
    },
    refetchOnMount: false,
    retry: false,
    refetchOnWindowFocus: false,
  });

  useQuery({
    queryKey: [ingredient],
    queryFn: async () =>
      ingredient ? recipeService.getByRegion(ingredient) : null,
    onSuccess: (data) => {
      if (data) setRecipes(data);
    },
    refetchOnMount: false,
    retry: false,
    refetchOnWindowFocus: false,
  });

  useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: async () => recipeService.getCategories(),
    onSuccess: (data) => {
      setCategories(data);
    },
    refetchOnMount: true,
    retry: false,
    refetchOnWindowFocus: false,
  });

  useQuery({
    queryKey: [QUERY_KEYS.REGIONS],
    queryFn: async () => recipeService.getRegions(),
    onSuccess: (data) => {
      setRegions(data);
    },
    refetchOnMount: true,
    retry: false,
    refetchOnWindowFocus: false,
  });

  useQuery({
    queryKey: [QUERY_KEYS.INGRIDIENTS],
    queryFn: async () => recipeService.getIngridients(),
    onSuccess: (data) => {
      setIngredients(data);
    },
    refetchOnMount: true,
    retry: false,
    refetchOnWindowFocus: false,
  });

  useQuery({
    queryKey: [QUERY_KEYS.RECIPE, recipeId],
    queryFn: async () => (recipeId ? recipeService.getById(recipeId) : null),
    onSuccess: (data) => {
      setRecipe(data);
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        Swal.fire({
          icon: "error",
          title: "Request error",
          text: error.response?.data.messages[0] as string,
        });
      }
    },
    refetchOnMount: false,
    retry: false,
    refetchOnWindowFocus: false,
  });
};
