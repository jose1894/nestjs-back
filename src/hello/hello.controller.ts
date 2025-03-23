import { Controller, Get, HttpCode, Param, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {

  @Get('/hello')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).json({'message': 'Hello World!'});
  }

  @Get('new')
  @HttpCode(201)
  somethingNew(){
    return 'Something new';
  }

  @Get('notFound')
  @HttpCode(404)
  notFoundPage(){
    return '404 Not Found';
  }

  @Get('notFound')
  @HttpCode(500)
  errorPage(){
    return 'Error route';
  }

  @Get('ticket/:num')
  getNumber(@Param('num') num: string){
    return num + 14;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateuserPipe) query: {name: string, age: number}){
    console.log(typeof query.age);
    console.log(typeof query.name);
    return `Hello ${query.name}, you are ${query.age} years old`;

  }

}
