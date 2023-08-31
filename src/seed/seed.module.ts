import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CountryModule } from '../geo/country/country.module';
import { LevelModule } from 'src/geo/level/level.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [CountryModule, LevelModule, AuthModule]
})
export class SeedModule {}
