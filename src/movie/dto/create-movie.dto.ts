import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDTO{
  @IsNotEmpty()
  @IsString()
  readonly title : string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsNumber()
  readonly month: number;

  @IsOptional()
  @IsString({each:true})
  readonly genre: string[];
}