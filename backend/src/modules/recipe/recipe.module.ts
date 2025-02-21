import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { ErrorModule } from '../error/error.module';

@Module({
  providers: [RecipeService],
  controllers: [RecipeController],
  imports: [ErrorModule],
})
export class RecipeModule {}
