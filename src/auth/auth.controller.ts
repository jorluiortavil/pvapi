import { Controller, Get, Post, UseGuards, Request} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { users } from 'src/user/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){
    }
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(
    @Request() req: any
    ){
        const data= await this.authService.login(req.user);
        return {
            message: 'Ingreso Exitoso',
            data
        };
    }
    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    profile(@Request() req: any){
       const {clave, ...rest} = req.user;
        return {
            mensaje: 'Peticion ceptada',
            rest
        };
    }

}
