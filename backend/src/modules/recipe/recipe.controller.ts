import { Controller, Get, Param } from '@nestjs/common';

import { RecipeService } from './recipe.service';

import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { GetAllReturnDto, GetByIdReturnDto } from './dto/swagger-examples';

@ApiTags('Recipe')
@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @ApiResponse({
    status: 200,
    type: GetAllReturnDto,
  })
  @Get('all')
  public async getAll() {
    const recipes = await this.recipeService.getAll();
    return { recipes };
  }

  @ApiResponse({
    status: 200,
    type: GetAllReturnDto,
  })
  @Get('ingredient/:ingredient')
  public async getByIngredient(@Param('ingredient') ingredient: string) {
    const recipes = await this.recipeService.getAllByIngredient(ingredient);
    return { recipes };
  }

  @ApiResponse({
    status: 200,
    type: GetAllReturnDto,
  })
  @Get('category/:category')
  public async getAllByCategory(@Param('category') category: string) {
    const recipes = await this.recipeService.getAllByCategory(category);
    return { recipes };
  }

  @ApiResponse({
    status: 200,
    type: GetAllReturnDto,
  })
  @Get('region/:region')
  public async getAllByRegion(@Param('region') region: string) {
    const recipes = await this.recipeService.getAllByRegion(region);
    return { recipes };
  }

  @ApiResponse({
    status: 200,
    type: GetByIdReturnDto,
  })
  @Get('one/:id')
  public async getById(@Param('id') id: string) {
    const recipe = await this.recipeService.getById(id);
    return { recipe };
  }

  @ApiResponse({
    status: 200,
    type: GetByIdReturnDto,
  })
  @Get('regions')
  public async getAllRegion() {
    const regions = await this.recipeService.getRegions();
    return { regions };
  }

  @ApiResponse({
    status: 200,
    type: GetByIdReturnDto,
  })
  @Get('categories')
  public async getAllCategories() {
    const categories = await this.recipeService.getCategories();
    return { categories };
  }

  @ApiResponse({
    status: 200,
    type: GetByIdReturnDto,
  })
  @Get('ingredients')
  public async getAllIngridients() {
    const ingredients = await this.recipeService.getIngredients();
    return { ingredients };
  }
}
