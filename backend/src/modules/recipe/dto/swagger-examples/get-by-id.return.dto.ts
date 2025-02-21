import { ApiProperty } from '@nestjs/swagger';
import { RecipeResponseModel } from '../../../../shared/models/recipe.model';

export class GetByIdReturnDto {
  @ApiProperty({
    example: {
      id: '53086',
      meal: 'Migas',
      category: 'Miscellaneous',
      region: 'Norwegian',
      instructions: 'this is a test',
      thumbnail: '',
      source: '',
      ingredients: ['Bread', 'Olive Oil', 'Garlic', 'Pork'],
      tags: '',
      youtube: '',
      measures: ['1 large', '1 1/2 L', 'Half', '1 Handfull'],
    },

    description: 'Returns recipe by id',
  })
  public recipe!: RecipeResponseModel;
}
