import { Body, Controller, Get, Post , ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiTags('users')
  @Get('/users')
  getUsers() {
    return this.userService.getUsers();
  }

  @Post('/users')
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }
}
