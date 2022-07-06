import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl, IsUUID } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Burguesão',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Descrição do produto',
    example:
      'Hamburguer de carne bovina grelhada com bacon, queijo e molho especial.',
  })
  description: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'Preço do produto',
    example: 19.99,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'Link da imagem do produto',
    example: 'https://i.imgur.com/hNE75Iw.png',
  })
  image: string;

  @IsUUID()
  @ApiProperty({
    description: 'Id da categoria do produto',
    example: '069g56796-9ce2-7h7b-7342-9d5b3fe601b7',
  })
  categoryId: string;
}
