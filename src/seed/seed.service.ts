import { Injectable } from '@nestjs/common';
import { CountryService } from '../geo/country/country.service';
import { country, geos } from './data/seed-country.data';
import { LevelService } from '../geo/level/level.service';
import { StatusEnum } from '../geo/common/enums/status.enum';
import { LevelInterface } from './interfaces/level.interface';
import { Country } from '../geo/country/entities/country.entity';
import * as casual from 'casual';
import { number } from 'joi';
@Injectable()
export class SeedService {
  contriesIds = [];
  constructor(
    private readonly countryService: CountryService,
    private readonly levelService: LevelService
  ){}

  async runSeed(){
    
    this.truncateLevels();
    this.truncateCountries();
    const cr = await this.insertCountryCR();
    this.insertLevelCR(cr);
    this.inserGenCountriesLevels(3, [2,5,10]);
    this.inserGenCountriesLevels(4, [2,5,10,15]);
    this.inserGenCountriesLevels(5, [2,5,10,15,20]);
    


    return 'Seed executed'
  }


  private async truncateCountries(){
    this.countryService.truncateCountries();
  }


  private async inserGenCountriesLevels(levels: number, cant: number[]){

    //Pais
    if(levels > 0)
      for(let i=0 ; i<= cant[0]; i++){

        casual.define('countryGen', function () {
          return {
            code: casual.country_code,
            codeBco: `${casual.integer(100, 1000)}`,
            codeCom: `${casual.integer(100, 1000)}`,
            "areaCode": `${casual.country_code}`,
            "name": casual.country,
            "status":StatusEnum.active ,
            "createDate":  casual.date('MM-DD-YYYY')
          };
        });
        
        const country = await this.countryService.create(
          casual['countryGen']
        );

        //Nivel 1
        if(levels > 1)
          for(let i=0 ; i< cant[1]; i++){
            casual.define('level1', function(){
              return {
                status:StatusEnum.active,
                createDate: casual.date('MM-DD-YYYY'),
                countryId: country.id,
                name: casual.city,
                numLevel: 1,
                code: `${casual.integer(100, 1000)}`,
                codeBco:`${casual.integer(100, 1000)}`,
                codeCom:`${casual.integer(100, 1000)}`,
              };
            });
            const level1 = await this.levelService.create(casual['level1']);

              //Nivel2
              if(levels > 2)
              for(let i=0 ; i< cant[2]; i++){
                casual.define('level2', function(){
                  return {
                    status:StatusEnum.active,
                    createDate:casual.date('MM-DD-YYYY'),
                    name: casual.city,
                    numLevel: 2,
                    code: `${casual.integer(100, 1000)}`,
                    codeBco:`${casual.integer(100, 1000)}`,
                    codeCom:`${casual.integer(100, 1000)}`,
                    parentId: level1.id,
                  };
                });
                const level2 = await this.levelService.create(casual['level2']);
              

                //Nivel3
                if(levels > 3)
                  for(let i=0 ; i< cant[3]; i++){
                    casual.define('level3', function(){
                      return {
                        status:StatusEnum.active,
                        createDate: casual.date('MM-DD-YYYY'),
                        name: casual.city,
                        numLevel: 3,
                        code: `${casual.integer(100, 1000)}`,
                        codeBco:`${casual.integer(100, 1000)}`,
                        codeCom:`${casual.integer(100, 1000)}`,
                        parentId: level2.id,
                      };
                    });
                    const level3 = await this.levelService.create(casual['level3']);

                    //Nivel 4
                    if(levels > 4)
                    for(let i=0 ; i< cant[4]; i++){
                      casual.define('level4', function(){
                        return {
                          status:StatusEnum.active,
                          createDate: casual.date('MM-DD-YYYY'),
                          name: casual.city,
                          numLevel: 4,
                          code: `${casual.integer(100, 1000)}`,
                          codeBco:`${casual.integer(100, 1000)}`,
                          codeCom:`${casual.integer(100, 1000)}`,
                          parentId: level3.id,
                        };
                      });
                      await this.levelService.create(casual['level4']);
                    }
                  }
            }
          }
      }
    

  }


  private async insertCountryCR(){
      return  await this.countryService.create({...country.countries[0]});
  }



  private async insertLevelCR(country: Country){
    const isertPromise = [];

    geos.provincias.forEach( async (p :any)=>  {
      const provincia : LevelInterface  = {
        status:StatusEnum.active,
        createDate: new Date('08/29/2023'),
        countryId: country.id,
        name: p.nombre,
        numLevel: 1,
        code: p.code,
        codeBco: p.code,
        codeCom: p.code
      };

      const iprovincia = await this.levelService.create(provincia);
      //Insertar provincia.

      const cantones = [];
      let cantonIndex = 1;
      p.cantones.forEach(async ( c: any) => {
        const code = `${provincia.code}${cantonIndex < 10 ? `0${cantonIndex}`: cantonIndex}`;
        const canton: LevelInterface = {
          status:StatusEnum.active,
          createDate: new Date('08/29/2023'),
          name: c.nombre,
          numLevel: 2,
          code: code,
          parentId: iprovincia.id,
          codeCom:code,
          codeBco: code
        }
        cantonIndex = cantonIndex + 1;
        const icanton = await this.levelService.create(canton);
        //Insertar cantones.
        const keys = Object.keys(c.distritos);
        keys.forEach( async key => {
          const code =`${canton.code}${key}`;
          const distrito:LevelInterface = {
            status:StatusEnum.active,
            createDate: new Date('08/29/2023'),
            name: c.distritos[key],
            numLevel: 3,
            code: code,
            codeBco: code,
            codeCom: code,
            parentId: icanton.id
          };
          await this.levelService.create(distrito);
        })
        
      });

    })
  }


  private async truncateLevels(){
    await this.levelService.truncateTable();
  }
}
