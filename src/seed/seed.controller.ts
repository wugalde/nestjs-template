import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from '../auth/decorators/auth.decorator';
import { ValidRoles } from '../auth/interfaces/valid-roles';

@ApiTags('Seed')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  @ApiOperation({ summary: 'Popula la base de datos, con datos dummy' })
  @ApiResponse({status:200, description:'Request existoso' })
  @Auth( ValidRoles.superAdmin)
  executeSeed() {
    return this.seedService.runSeed();
  }

  

}
