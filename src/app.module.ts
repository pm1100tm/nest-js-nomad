import { MovieModule } from './movie/movie.module';
import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';

@Module({
  imports: [MovieModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
