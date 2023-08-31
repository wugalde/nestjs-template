import { IsDate, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { StatusEnum } from "../../common/enums/status.enum";
export class CreateCountryDto {

    @ApiProperty({
        default: 'CR',
        description: 'Codigo del pais',
        nullable: false, minLength: 2, maxLength: 4
    })
    @IsString()
    @MaxLength(4)
    @IsNotEmpty()
    code: string;

    @ApiProperty({})
    @IsString()
    @MaxLength(4)
    @IsOptional()
    codeBco?: string;

    @ApiProperty({})
    @IsString()
    @MaxLength(4)
    @IsOptional()
    codeCom?: string;

    @ApiProperty({})
    @IsString()
    @IsNotEmpty()
    @MaxLength(4)
    areaCode: string;

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
}
