import { MovieService } from './movie.service';
import { Body, Controller, Delete, Get, Injectable, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService:MovieService){}

  @Get()
  getAll(){
    return this.movieService.getAll()
  }

  @Get('/search')
  searchMovie(@Query('year') searchingYear: string, @Query('month') searchingMonth: string ){
    return `test searchMovie ${searchingYear} ${searchingMonth}`
  }

  @Get('/:id')
  getOne(@Param('id') movieId: number) {
    return this.movieService.getOne(movieId)
  }

  @Post()
  createMovie(@Body() createMovieDTO: CreateMovieDTO){
    return this.movieService.createMovie(createMovieDTO)
  }

  @Patch('/:id')
  updateMovie(@Param('id') movieId: number, @Body() updateMovieDTO: UpdateMovieDTO){
    const result =  this.movieService.updateMovie(movieId, updateMovieDTO)
    console.log(result)
    return result
  }

  @Delete('/:id')
  deleteMovie(@Param('id') movieId: number){
    return 'test deleteMovie'
  }
}
