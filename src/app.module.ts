import { Module } from '@nestjs/common'
import { join } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ServeStaticModule } from '@nestjs/serve-static'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath:
        process.env.NODE_ENV === 'production'
          ? join(__dirname, 'build')
          : join(__dirname, '..', 'assets', 'build'),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
