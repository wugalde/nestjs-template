import { ExecutionContext, InternalServerErrorException, createParamDecorator } from "@nestjs/common";

export const RowHeader = createParamDecorator((data, ctx: ExecutionContext) => {
    
    const req = ctx.switchToHttp().getRequest();
    const rowh = req.rawHeaders;
    if(!rowh) throw new InternalServerErrorException('Row Header no encontrado')
    
     return rowh;
})