import { Module } from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelController } from './level.controller';
import { Level } from './entities/level.entity';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryModule } from '../country/country.module';

@Module({
  controllers: [LevelController],
  providers: [LevelService],
  imports: [
    TypeOrmModule.forFeature([ Level]),
    AuthModule, CountryModule
  ],
  exports: [LevelService]
})
export class LevelModule {}
