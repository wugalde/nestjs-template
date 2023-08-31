import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe } from '@nestjs/common';

import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Auth } from '../../auth/decorators';
import { ValidRoles } from '../../auth/interfaces';
import { PaginationDto } from '../../common/dtos/pagination.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Country } from './entities/country.entity';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}



  @Get()
  @ApiOperation({ summary: 'Obtiene los items' })
  @ApiResponse({status:200, description:'Request existoso', type: () => Promise<[Country]>})
  @ApiResponse({status:401, description:'Solicitud incorrecta'})
  @ApiResponse({status:403, description:'Token incorrecto'})
  @ApiResponse({status:404, description:'Item no encontrado'})
  @Auth( ValidRoles.user)
  findAll(@Query() paginationDto: PaginationDto) {
    return this.countryService.findAll(paginationDto);
  }


  @Post()
  @ApiResponse({status:201, description:'Item creado', type: Promise<Country>})
  @ApiResponse({status:401, description:'Solitud incorrecta'})
  @ApiResponse({status:403, description:'Token incorrecto'})
  @Auth( ValidRoles.admin)
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create(createCountryDto);
  }


  @Get(':id')
  @ApiOperation({ summary: 'Obtiene el item' })
  @ApiResponse({status:200, description:'Request existoso', type: () => Promise<Country>})
  @ApiResponse({status:401, description:'Solicitud incorrecta'})
  @ApiResponse({status:403, description:'Token incorrecto'})
  @ApiResponse({status:404, description:'Item no encontrado'})
  @Auth( ValidRoles.admin)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.countryService.findOneById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualiza un item' })
  @ApiResponse({status:200, description:'Item actualizada', type:() => Promise<Country>})
  @ApiResponse({status:401, description:'Solicitud incorrecta'})
  @ApiResponse({status:403, description:'Token incorrecto'})
  @ApiResponse({status:404, description:'Item no encontrado'})
  
  @Auth( ValidRoles.admin)
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateCountryDto: UpdateCountryDto) {
    return this.countryService.update(id, updateCountryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina un item' })
  @ApiResponse({status:200, description:'Item elimnado', type: () => Promise<Country>})
  @ApiResponse({status:401, description:'Solicitud incorrecta'})
  @ApiResponse({status:403, description:'Token incorrecto'})
  @ApiResponse({status:404, description:'Item no encontrado'})
  
  @Auth( ValidRoles.admin)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.countryService.remove(id);
  }
}
