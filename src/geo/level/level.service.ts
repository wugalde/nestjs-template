import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Level } from './entities/level.entity';
import { Repository } from 'typeorm';
import { HandleException } from '../../common/exceptions/handle.exception';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Country } from '../country/entities/country.entity';
import { CountryService } from '../country/country.service';

@Injectable()
export class LevelService {

  logger = new Logger('LevelService:');


  constructor(
    @InjectRepository (Level)
    private readonly levelRepository: Repository<Level>,
    private readonly countryService: CountryService
    ){}


  async create(createLevelDto: CreateLevelDto):Promise<Level> {
    try{
      const country = await this.countryService.findOneById(createLevelDto.countryId);
      let parent = null;

      const level = this.levelRepository.create(createLevelDto);
      level.country = country;

      if(createLevelDto.parentId){
        parent = await this.findOneById(createLevelDto.parentId);
        if(!parent)  throw new NotFoundException(`El nivel con el Id:${createLevelDto.parentId} no existe`);
        level.parent = parent;
      }
      
      await this.levelRepository.save(level);
      return level;
    }catch(error) {
      HandleException.handleException(error,this.logger)
    }
  }

  async findAll(paginationDto: PaginationDto) :Promise<Level[]>{
    const { limit = 10, offset = 0} = paginationDto;
    //relations:['country','parent','children']
    return await this.levelRepository.find({
      take: limit,
      skip: offset,
      relations: {
        country: false,
        parent: false,
        children: false
      }
    });
  }

  async findOneById(id: string):Promise<Level> {
    const level: Level = await this.levelRepository.findOneBy({id});
    if(!level) throw new NotFoundException(`El nivel con el Id:${id} no existe`);
    return level;
  }

  async findByParent(idParent: string){
      return  await this.levelRepository.find({
        where: {id: idParent},
        relations: {children: true}
      });
        
    // return await this.levelRepository.createQueryBuilder()
    //   .relation(Level, "children")
    //   .of({id: idParent}) 
    //   .loadMany()
    } 

  async update(id: string, updateLevelDto: UpdateLevelDto) :Promise<Level>{
    const level = await this.levelRepository.preload({id, ...updateLevelDto});
    if(!level) throw new NotFoundException(`El nivel con el Id:${id} no existe`);
    await this.levelRepository.save(level);
    return level;
  }

  async remove(id: string):Promise<Level> {
    const level: Level = await this.findOneById(id);
    return await this.levelRepository.remove(level);
  }

  async truncateTable(){
    await this.levelRepository.clear();
  }
}
