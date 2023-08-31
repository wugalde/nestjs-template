import { date } from "joi";
import { type } from "os";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StatusEnum } from "../../common/enums/status.enum";
import { ApiProperty } from "@nestjs/swagger";
import { Level } from "../../level/entities/level.entity";
import { BaseEntity } from "../../common/entity/base.entity";

@Entity({name: 'countries'})
export class Country extends BaseEntity{

    @ApiProperty({
        example: "077e84a2-1bb9-4806-a061-15e85be83bdc",
        description: 'Id del pais',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({})
    @Column({
        type:'text'
    })
    code: string;

    @ApiProperty({})
    @Column('text',{nullable: true})
    codeBco: string;

    @ApiProperty({})
    @Column('text',{nullable: true})
    codeCom: string;

    @ApiProperty({})
    @Column('text')
    areaCode: string;

    @ApiProperty({})
    @Column('text')
    name: string;

    @ApiProperty({})
    @OneToMany(
        ()=> Level,
        (lavel) => lavel.country,
        {cascade: true}
    )
    levels?: Level[];


    // @BeforeInsert()
    // checkStatus(){
    //     if(!this.estArea){
    //         this.estArea = 'ACT';
    //     } 
    // }

    // @BeforeUpdate()
    // beforeUpdate(){
    //     if(!this.desArea){
    //         this.desArea = '.';
    //     }
    // }
}
