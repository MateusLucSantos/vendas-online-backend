import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
@Controller('user')
export class UserController {
  @Get()
  async getAllUsers() {
    return JSON.stringify({ teste: 'Teste' });
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    return {
      ...createUser,
      password: undefined
    };
  }
}
