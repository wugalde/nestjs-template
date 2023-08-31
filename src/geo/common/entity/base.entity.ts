import { Column } from "typeorm";
import { StatusEnum } from "../enums/status.enum";
import { ApiProperty } from "@nestjs/swagger";

export class BaseEntity {

    @ApiProperty({})
    @Column('text')
    status: StatusEnum;

    @ApiProperty({})
    @Column('date')
    createDate: Date;


    @ApiProperty({
        example: '2023-08-23',
        description: 'Fecha de actualizacion',
    })
    @Column('date',{nullable: true})
    modifyDate?: Date;
}