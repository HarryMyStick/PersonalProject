import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './models/dto/create-user.dto';
import * as crypto from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    const { username, password } = createUserDto;

    const existingUser = await this.usersRepository.findOne({
      where: [{ username }],
    });

    if (existingUser) {
      throw new ConflictException('user already exists');
    }
    const hashedPassword = crypto
      .createHash('md5')
      .update(password)
      .digest('hex');

    const user = this.usersRepository.create({
      username,
      password: hashedPassword,
    });

    await this.usersRepository.save(user);

    return user;
  }

  async signIn(createUserDto: CreateUserDto): Promise<User> {
    const { username, password } = createUserDto;

    const hashedPassword = crypto
      .createHash('md5')
      .update(password)
      .digest('hex');

    const user = await this.usersRepository.findOne({
      where: { username, password: hashedPassword },
    });

    if (!user) {
      throw new NotFoundException('Invalid username or password');
    }
    return user;
  }

  async deleteUser(user_id: string): Promise<void> {
    const user = await this.usersRepository.findOne({
      where: [{ user_id: user_id }],
    });
    if (!user) {
      throw new NotFoundException('Contribution not found');
    }
    await this.usersRepository.remove(user);
  }
}
