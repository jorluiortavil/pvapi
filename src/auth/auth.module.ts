import { forwardRef, Inject, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { localStrategy } from './strategies/local.strategy';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule, 
    forwardRef(() => UserModule), 
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService)=>({
        secret: config.get<string>('JWT_TOKEN'),
        signOptions: {expiresIn: '60m'}  
      })
    })
  ],
  providers: [
    AuthService, 
    localStrategy, 
    JwtStrategy
  ],
  controllers: [AuthController]
})
export class AuthModule {}
