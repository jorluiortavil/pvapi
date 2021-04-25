import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { users } from './user.entity';
import { UserService } from './user.service';

@Module({  
  imports: [
    TypeOrmModule.forFeature([users]) 
  ],
  controllers: [UserController], 
  providers: [UserService],
  exports: [
    UserService
  ]
})
export class UserModule {}
