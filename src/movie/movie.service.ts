import { Injectable } from '@nestjs/common';
import { Movie } from './entity/movie.entity';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { type } from 'os';

@Injectable()
export class MovieService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies
  }

  getOne(movieId: number):Movie {
    return this.movies.find(movie => movie.id === movieId)
  }

  createMovie(createMovieDTO: CreateMovieDTO) {
    this.movies.push({
      id: this.movies.length + 1,
      ...createMovieDTO
    })
    return this.movies.slice(-1)
  }

  updateMovie(movieId: number, updateMovieDTO: UpdateMovieDTO): UpdateMovieDTO{
    const movieInstance = this.getOne(movieId)
    if (!movieInstance){
      return null
    }

    if (updateMovieDTO.year) {
      movieInstance.year = updateMovieDTO.year
    }

    if (updateMovieDTO.month) {
      movieInstance.month = updateMovieDTO.month
    }

    if (updateMovieDTO.genre){
      updateMovieDTO.genre.forEach(item =>{
        console.log(item)
        console.log(typeof(item))
        if (movieInstance.genre.indexOf(item) === -1){
          movieInstance.genre.push(item)
        }
      })
    }

    return movieInstance
  }

  deleteMovie(id: number):boolean{
    this.movies.filter(movie => movie.id !== id)
    return true
  }
}
