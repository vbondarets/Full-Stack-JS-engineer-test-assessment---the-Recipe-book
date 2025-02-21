import { ApiProperty } from '@nestjs/swagger';

export class GetAllReturnDto {
  @ApiProperty({
    example: 'Get all recipes',
    description: 'Returns list of all recipes',
  })
  public recipes!: any[];
}
