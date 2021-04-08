import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'
import { Event } from './event.entity'

@Controller('api/events')
export class EventsController {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepo: MongoRepository<Event>
  ) {}

  @Get()
  async findAll(): Promise<Event[]> {
    const events = this.eventRepo.find()
    return events
  }

  @Post()
  async create(@Body() event: Partial<Event>): Promise<Event> {
    return await this.eventRepo.save(new Event(event))
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() event: Partial<Event>
  ): Promise<Event> {
    const ev = await this.eventRepo.findOne(id)
    const updatedEvent = { ...ev, ...event }
    return await this.eventRepo.save(updatedEvent)
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.eventRepo.delete(id)
    return
  }
}
