import { Controller, Get, Next, Req, Res } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): { statement: string } {
    return { statement: 'Hello!' }
  }

  // @Get('*')
  // get(@Res() res: Response, @Next() next: NextFunction, @Req() req: Request) {
  //   // change the path to the correct html page path in your project
  //   res.sendFile(join(process.cwd(), '../client/dist/index.html'));
  // }
}
