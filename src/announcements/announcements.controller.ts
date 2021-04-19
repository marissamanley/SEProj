import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'
import { Announcement } from './announcement.entity'

@Controller('api/announcements')
export class AnnouncementsController {
  constructor(
    @InjectRepository(Announcement)
    private readonly announcementRepo: MongoRepository<Announcement>
  ) {}

  @Get()
  async findAll(): Promise<Announcement[]> {
    const announcements = this.announcementRepo.find()
    return announcements
  }

  @Post()
  async create(
    @Body() announcement: Partial<Announcement>
  ): Promise<Announcement> {
    return await this.announcementRepo.save(new Announcement(announcement))
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() announcement: Partial<Announcement>
  ): Promise<Announcement> {
    const ann = await this.announcementRepo.findOne(id)
    const updatedAnnouncement = { ...ann, ...announcement }
    return await this.announcementRepo.save(updatedAnnouncement)
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.announcementRepo.delete(id)
    return
  }
}
