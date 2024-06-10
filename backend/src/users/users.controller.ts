import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './models/dto/create-user.dto';
import { User } from './models/entities/user.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signUp')
  signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.signUp(createUserDto);
  }

  @Post('signIn')
  async signIn(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.signIn(createUserDto);
  }
}
