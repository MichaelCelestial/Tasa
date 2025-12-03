import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';


interface RequestDto {
  name: string;
  email: string;
  phone?: string;
  message: string;
}


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('request')
  async sendRequest(@Body() requestData: RequestDto): Promise<{ success: boolean; message: string }> {
    return this.appService.sendToTelegram(requestData);
  }
}