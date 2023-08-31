import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HandleException } from '../../common/exceptions/handle.exception';
import { PaginationDto } from '../../common/dtos/pagination.dto';
import { Country } from './entities/country.entity';
import { Level } from '../level/entities/level.entity';



@Injectable()
export class CountryService {
  logger = new Logger('CountryService:');
  constructor(
    @InjectRepository (Country)
    private readonly countryRepository: Repository<Country>
    ){}

  async create(createCountryDto: CreateCountryDto) {
    try {
      const country = this.countryRepository.create(createCountryDto);
      await this.countryRepository.save (country);
      return country;
    } catch (error) {
      HandleException.handleException(error,this.logger)
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const {limit = 10, offset=0 } = paginationDto;
    return await this.countryRepository.find({
      take: limit,
      skip: offset,
      relations:['levels']
    },
    );
  }
  async findOneById(id: string){
    const country: Country =  await this.countryRepository.findOneBy({id});
    if(!country)
      throw new NotFoundException(`No se encontro el area con el id:${id}`)
    return country;
  }

  async update(id: string, updateCountryDto: UpdateCountryDto) {
    const country = await this.countryRepository.preload({id, ...updateCountryDto});
    if(!country)
      throw new NotFoundException(`El area con el id ${id} no existe`);
    
    await this.countryRepository.save(country);
    return country;
  }

  async remove(id: string) {
    const country :Country = await this.findOneById(id);
    return await this.countryRepository.remove(country);
  }


  async truncateCountries(){
    await this.countryRepository.delete({});
  }
}
