import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { EnvConfiguration } from './config/env.config';
import { JoivalidationSchema } from './config/joi.validation';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CountryModule } from './geo/country/country.module';
import { LevelModule } from './geo/level/level.module';
import { SeedModule } from './seed/seed.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      load:[EnvConfiguration],
      validationSchema: JoivalidationSchema,
    }), //
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DBPG_PORT,
      database: process.env.DBPG_NAME,
      username: process.env.DBPG_USER,
      password: process.env.DBPG_PWD,
      autoLoadEntities: true,
      synchronize: true, //en prod, debe estar en false.
    }),

    // Modulos del api
    AuthModule,
    CountryModule,
    LevelModule,
    SeedModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
