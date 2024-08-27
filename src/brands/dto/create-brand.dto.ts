import { IsString, IsUUID, MinLength } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @MinLength(3)
  name: string;
}
