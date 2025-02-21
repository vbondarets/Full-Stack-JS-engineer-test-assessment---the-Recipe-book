import { Controller, Get, Param } from '@nestjs/common';

import { RecipeService } from './recipe.service';

import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { GetAllReturnDto } from './dto/swagger-examples';

@ApiTags('Recipe')
@Controller('Recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @ApiResponse({
    status: 200,
    type: GetAllReturnDto,
  })
  @Get('all')
  public async getAll(): Promise<any> {
    return this.recipeService.getAll();
  }

  @ApiResponse({
    status: 200,
    type: GetAllReturnDto,
  })
  @Get('ingredient/:ingredient')
  public async getByIngredient(
    @Param('ingredient') ingredient: string,
  ): Promise<any> {
    return this.recipeService.getAllByIngredient(ingredient);
  }

  @ApiResponse({
    status: 200,
    type: GetAllReturnDto,
  })
  @Get('category/:category')
  public async getAllByCategory(
    @Param('category') category: string,
  ): Promise<any> {
    return this.recipeService.getAllByCategory(category);
  }

  @ApiResponse({
    status: 200,
    type: GetAllReturnDto,
  })
  @Get('region/:region')
  public async getAllByRegion(@Param('region') region: string): Promise<any> {
    return this.recipeService.getAllByRegion(region);
  }

  @ApiResponse({
    status: 200,
    type: GetAllReturnDto,
  })
  @Get(':id')
  public async getById(@Param('id') id: string): Promise<any> {
    return this.recipeService.getById(id);
  }
}
