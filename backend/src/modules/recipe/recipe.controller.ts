import { Controller, Get, Param } from '@nestjs/common';

import { RecipeService } from './recipe.service';

import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { GetAllReturnDto } from './dto/swagger-examples';

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
    type: GetAllReturnDto,
  })
  @Get(':id')
  public async getById(@Param('id') id: string) {
    const recipe = await this.recipeService.getById(id);
    return { recipe };
  }
}
