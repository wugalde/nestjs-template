import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Req, Headers, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorators/get-user.decorator';
import { User } from './entities/user.entity';
import { RowHeader } from './decorators/row-header.decorator';
import { IncomingHttpHeaders } from 'http2';
import { UserRoleGuard } from './guards/user-role/user-role.guard';
import { RoleProtected } from './decorators/role-protected.decorator';
import { ValidRoles } from './interfaces';
import { Auth } from './decorators';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }


  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto){
    return this.authService.loginUser(loginUserDto);
  }



  @Get('private')
  @UseGuards( AuthGuard())
  testPrivateRoute( 
    @Req() request: Express.Request,
    @GetUser() user: User,
    @GetUser('email') userEmail: string,
    @RowHeader() headers: string[],
    @Headers() heads: IncomingHttpHeaders
  ){
    console.log(request)
    return {
      private: true, 
      msj: 'OK',
      user: user,
      email: userEmail,
      headers,
      heads
    }
  }


  @Get('private2')
  // @SetMetadata('roles', ['admin', 'super.user'])
  @RoleProtected(ValidRoles.superUser, ValidRoles.admin)  
  @UseGuards( AuthGuard(), UserRoleGuard)
  testPrivate2Route( 
    @GetUser() user: User,
  ){
    return {
      private: true, 
      msj: 'OK',
      user: user,
    }
  }


    @Get('private3')
    @Auth(ValidRoles.superUser)
    testPrivate3Route( 
      @GetUser() user: User,
    ){
      return {
        private: true, 
        msj: 'OK',
        user: user,
      }
    }
}
