import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "../entities/user.entity";
import { JwtPayload } from "../interfaces/jwt-paylod.interface";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfigService } from '@nestjs/config';
import { UnauthorizedException, Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(
        @InjectRepository( User) 
        private readonly userRepository: Repository<User>,
        configService: ConfigService){
            super({
                secretOrKey: configService.get('JWT_SECRET'),
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
            })
    }

    async validate(paylod: JwtPayload): Promise<User>{
        const { id } = paylod;

        const user= await this.userRepository.findOneBy({id});

        if(!user) throw new UnauthorizedException('Token no valido.')

        if(!user.isActive) throw new UnauthorizedException('Usuario inactivo, contacte al administrador.')

        return user;
    }
}