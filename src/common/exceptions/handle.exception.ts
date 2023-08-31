import { BadRequestException, InternalServerErrorException, Logger } from "@nestjs/common";

export class HandleException{


    static handleException(error: any, logger:Logger ){
        if(error.code === '23505')
            throw new BadRequestException(error.detail);
          logger.error(error);
           throw new InternalServerErrorException('');
    
    }
}