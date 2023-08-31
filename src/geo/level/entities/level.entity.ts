import { ApiProperty } from "@nestjs/swagger";
import { StatusEnum } from "../../common/enums/status.enum";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "src/geo/country/entities/country.entity";
import { BaseEntity } from "src/geo/common/entity/base.entity";

@Entity({name:'levels'})
export class Level extends BaseEntity {

    @ApiProperty({
        example: "12345-1231sa2-121322-2313233",
        description: 'Id del pais',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('numeric')
    numLevel: number;

    @Column('text')
    code: string;

    @ApiProperty({})
    @Column('text',{nullable: true})
    codeBco: string;

    @ApiProperty({})
    @Column('text',{nullable: true})
    codeCom: string;

    @ApiProperty({})
    @Column('text')
    name: string;

    @ApiProperty({})
    @ManyToOne(
        () => Country,
        (country) => country.levels
    )
    @JoinColumn({name: 'countryId'})
    country: Country;

    @ApiProperty({})
    @ManyToOne(
        ()=> Level,
        (level) => level.children,
    )
    @JoinColumn({name: 'levelParentId'})
    parent?:Level;

    @ApiProperty({})
    @OneToMany(
        () => Level,
        (level) => level.parent,
    )
    children?: Level[];

}