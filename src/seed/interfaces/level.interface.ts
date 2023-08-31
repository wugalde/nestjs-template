import { StatusEnum } from "../../geo/common/enums/status.enum";

export interface LevelInterface {
    id?: string;
    code: string;
    numLevel: number;
    codeCom: string;
    codeBco: string;
    name: string;
    status: StatusEnum;
    createDate: Date;
    modifyDate?: Date;
    countryId?: string;
    parentId?: string;
}