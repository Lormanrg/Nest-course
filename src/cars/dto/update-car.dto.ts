import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsUUID()
  @IsOptional()
  @IsString()
  readonly id?: string;

  @IsOptional()
  @IsString()
  readonly brand?: string;

  @IsOptional()
  @IsString()
  readonly model?: string;
}
