import { IsNumber, IsString } from 'class-validator';

export class UpdateMovieDTO{
  @IsString()
  readonly title?: string;

  @IsNumber()
  readonly year?: number;

  @IsNumber()
  readonly month?: number;

  @IsString({each: true})
  readonly genre?: string[];
}