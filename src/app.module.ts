import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './models/user';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'db',
      autoLoadModels: true,
      synchronize: true,
      models: [User],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
