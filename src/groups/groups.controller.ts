import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'
import { Group } from './group.entity'

@Controller('api/groups')
export class GroupsController {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepo: MongoRepository<Group>
  ) {}

  @Get()
  async findAll(): Promise<Group[]> {
    const groups = this.groupRepo.find()
    return groups
  }

  @Post()
  async create(@Body() group: Partial<Group>): Promise<Group> {
    return await this.groupRepo.save(new Group(group))
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() group: Partial<Group>
  ): Promise<Group> {
    const ev = await this.groupRepo.findOne(id)
    const updatedGroup = { ...ev, ...group }
    return await this.groupRepo.save(updatedGroup)
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.groupRepo.delete(id)
    return
  }
}
