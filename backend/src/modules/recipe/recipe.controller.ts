import { Controller, Get } from '@nestjs/common';

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
  @Get('All')
  public async getAll(): Promise<any> {
    return this.recipeService.getAll();
  }
}
