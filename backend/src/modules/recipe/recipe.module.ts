import { Module, OnModuleInit } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { ErrorModule } from '../error/error.module';
import { ConfigService } from '@nestjs/config';
import { AxiosModule } from '../axios/axios.module';

@Module({
  providers: [RecipeService],
  controllers: [RecipeController],
  imports: [ErrorModule, AxiosModule],
})
export class RecipeModule implements OnModuleInit {
  constructor(
    private readonly configService: ConfigService,
    private readonly recipeService: RecipeService,
  ) {}
  public async onModuleInit() {
    if (process.env.NODE_ENV === 'development') {
      await Promise.all([
        this.recipeService.seedCategories(),
        this.recipeService.seedIngredients(),
        this.recipeService.seedRegions(),
      ]);
    }
  }
}
