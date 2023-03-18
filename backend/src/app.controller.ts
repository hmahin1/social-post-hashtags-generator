import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('generatePost')
  generatePost(@Body() aiObject) {
    return this.appService.generatePost(aiObject);
  }

  @Post('generateHashtags')
  generateHashtags(@Body() aiObject) {
    return this.appService.generateHashtags(aiObject);
  }
}
