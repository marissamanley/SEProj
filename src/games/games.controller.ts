import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'
import { Game } from './game.entity'

@Controller('api/games')
export class GamesController {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepo: MongoRepository<Game>
  ) {}

  @Get()
  async findAll(): Promise<Game[]> {
    return await this.gameRepo.find()
  }

  @Post()
  async create(@Body() game: Partial<Game>): Promise<Game> {
    return await this.gameRepo.save(new Game(game))
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() game: Partial<Game>
  ): Promise<Game> {
    const g = await this.gameRepo.findOne(id)
    const updatedGame = { ...g, ...game }
    return await this.gameRepo.save(updatedGame)
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.gameRepo.delete(id)
    return
  }
}
