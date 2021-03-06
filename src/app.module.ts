import { Module } from '@nestjs/common'
import { join } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ServeStaticModule } from '@nestjs/serve-static'
import { EventsController } from './events/events.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { Event } from './events/event.entity'
import { Game } from './games/game.entity'
import { Group } from './groups/group.entity'
import { GamesController } from './games/games.controller'
import { GroupsController } from './groups/groups.controller'
import { AnnouncementsController } from './announcements/announcements.controller'
import { Announcement } from './announcements/announcement.entity'

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath:
        process.env.NODE_ENV === 'production'
          ? join(__dirname, 'build')
          : join(__dirname, '..', 'assets', 'build'),
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_CONNECTION_STRING,
      database: process.env.MONGODB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    TypeOrmModule.forFeature([Event, Game, Group, Announcement]),
  ],
  controllers: [
    AppController,
    EventsController,
    GamesController,
    GroupsController,
    AnnouncementsController,
  ],
  providers: [AppService],
})
export class AppModule {}
