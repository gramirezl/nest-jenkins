import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('goodbye')
  getGoodBye() {
    return 'this is a Goodbye';
  }

  @Get('/date/mexico')
  getDate() {
    const date = new Date();
    return date.toLocaleString();
  }

  @Get('/return/nombre')
  getNombre() {
    return `hola Gustavo`;
  }

  @Get('/return/:name')
  getName(@Param('name') name: string) {
    return `Hello ${name}`;
  }

  @Get('categories/:categoryId/products/:productId')
  getCategory(@Param() { categoryId, productId }) {
    return `Product ${productId}, Category ${categoryId}`;
  }

  @Get('/return/user/data')
  getAge(@Query('age') age: number, @Query('name') name: string) {
    return `You are ${age} years old and your name is ${name}`;
  }
}
