import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

import * as bcrypt from 'bcrypt';
import { use } from 'passport';
import { CreateUserDto, LoginUserDto } from './dto';
import { JwtPayload } from './interfaces/jwt-paylod.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {


  constructor (
    @InjectRepository(User)
    private readonly  userRepository: Repository<User>,

    private readonly jwtService: JwtService
  ){}



  async create(createUserDto: CreateUserDto) {
    
    try{
      const { password, ...userData} = createUserDto;

      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 10)
      });
      await this.userRepository.save(user);
      delete user.password;

      return {...user, token: this.jwtToken({id:user.id})};
    }catch(error){
      this.handleDbError(error);
    }
   
  }



  async loginUser(loginUserDto: LoginUserDto) {
    // try{
      const {password, email} = loginUserDto;
      const user = await this.userRepository.findOne({
        where: {email},
        select: {email: true, password: true, id: true}
      });
      if(!user) throw new UnauthorizedException(' Credenciales incorrectas.')
      if(!bcrypt.compareSync(password, user.password)) throw new UnauthorizedException(' Credenciales incorrectas.')
      
      return {
        ...user,
        token: this.jwtToken({id:user.id})
      };
    // }catch(error){
      // this.handleDbError(error);
    // };
    
  }

  private handleDbError(error){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail)
    }

    console.error(error);
    throw new InternalServerErrorException('Revisar los logs del servidor')
  }


  private jwtToken(paylod: JwtPayload){
    const token =this.jwtService.sign(paylod);
    return token;
  }

}
