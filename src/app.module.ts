import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
     inject: [ConfigService],
     useFactory: (config:ConfigService)=>({
      type: 'mysql',
      host: config.get<string>('DATABASE_HOST'),
      port: parseInt(config.get<string>('DATABASE_PORT'), 10),
      username: config.get<string>('DATABASE_USER'),
      password: config.get<string>('DATABASE_PASS'),
      database: config.get<string>('DATABASE_NAME'),
      entities: ["dist/**/*.entity{.ts,.js}"],
      autoLoadEntities: true,
      synchronize: true,
    })
    }), 
    ConfigModule.forRoot({
      isGlobal: true, 
      envFilePath: '.env'
    }),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
