import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { StatusEnum } from "../../common/enums/status.enum";
import { UUID } from "typeorm/driver/mongodb/bson.typings";

export class CreateLevelDto {

    @ApiProperty({})
    @IsString()
    @MaxLength(4)
    @IsNotEmpty()
    code: string;


    @ApiProperty({})
    @IsNumber()
    @IsNotEmpty()
    numLevel: number;

    @ApiProperty({})
    @IsString()
    @MaxLength(8)
    @IsOptional()
    codeBco?: string;

    @ApiProperty({})
    @IsString()
    @MaxLength(8)
    @IsOptional()
    codeCom?: string;

    @ApiProperty({})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({})
    @IsString()
    @IsNotEmpty()
    @MaxLength(3)
    status: StatusEnum;

    @ApiProperty({})
    @IsDate()
    @Type(() => Date)
    createDate: Date;

    @ApiProperty({})
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    modifyDate?: Date;

    @ApiProperty({})
    @IsString()
    @IsOptional()
    countryId?: string;

    @ApiProperty({})
    @IsString()
    @IsOptional()
    parentId?: string;
}
