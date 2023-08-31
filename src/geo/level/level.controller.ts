import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Query } from '@nestjs/common';
import { LevelService } from './level.service';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces';
import { CreateLevelDto, UpdateLevelDto } from './dto';
import { PaginationDto } from '../../common/dtos/pagination.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Level } from './entities/level.entity';

@ApiTags('Level')
@Controller('level')
export class LevelController {
  constructor(private readonly levelService: LevelService) {}

  @Post()
  @ApiResponse({status:201, description:'Item creado', type: Promise<Level>})
  @ApiResponse({status:401, description:'Solitud incorrecta'})
  @ApiResponse({status:403, description:'Token incorrecto'})
  @Auth( ValidRoles.admin)
  create(@Body() createLevelDto: CreateLevelDto) {
    return this.levelService.create(createLevelDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtiene los items' })
  @ApiResponse({status:200, description:'Request existoso', type: () => Promise<[Level]>})
  @ApiResponse({status:401, description:'Solicitud incorrecta'})
  @ApiResponse({status:403, description:'Token incorrecto'})
  @ApiResponse({status:404, description:'Item no encontrado'})
  @Auth( ValidRoles.user)
  findAll(@Query() paginationDto: PaginationDto) {
    return this.levelService.findAll(paginationDto);
  }


  @Get(':id')
  @ApiOperation({ summary: 'Obtiene el item' })
  @ApiResponse({status:200, description:'Request existoso', type: () => Promise<Level>})
  @ApiResponse({status:401, description:'Solicitud incorrecta'})
  @ApiResponse({status:403, description:'Token incorrecto'})
  @ApiResponse({status:404, description:'Item no encontrado'})
  @Auth( ValidRoles.user)
  findOne(@Param('id',ParseUUIDPipe) id: string) {
    return this.levelService.findOneById(id);
  }

  @Get('parent/:id')
  @ApiOperation({ summary: 'Obtiene el item' })
  @ApiResponse({status:200, description:'Request existoso', type: () =>Promise<[Level]>})
  @ApiResponse({status:401, description:'Solicitud incorrecta'})
  @ApiResponse({status:403, description:'Token incorrecto'})
  @ApiResponse({status:404, description:'Item no encontrado'})
  @Auth( ValidRoles.user)
  findByParent(@Param('id',ParseUUIDPipe) id: string) {
    return this.levelService.findByParent(id);
  }


  @Patch(':id')
  @ApiOperation({ summary: 'Actualiza un item' })
  @ApiResponse({status:200, description:'Item actualizada', type:() => Promise<Level>})
  @ApiResponse({status:401, description:'Solicitud incorrecta'})
  @ApiResponse({status:403, description:'Token incorrecto'})
  @ApiResponse({status:404, description:'Item no encontrado'})
  @Auth( ValidRoles.admin)
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateLevelDto: UpdateLevelDto) {
    return this.levelService.update(id, updateLevelDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina un item' })
  @ApiResponse({status:200, description:'Item elimnado', type: () => Promise<Level>})
  @ApiResponse({status:401, description:'Solicitud incorrecta'})
  @ApiResponse({status:403, description:'Token incorrecto'})
  @ApiResponse({status:404, description:'Item no encontrado'})
  @Auth( ValidRoles.admin)
  remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.levelService.remove(id);
  }
}
