import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService){}

  @Get()
  async getAllUsers(): Promise<UserEntity[]> {
    return this.userService.getAllUser();
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUser)
  }
}
