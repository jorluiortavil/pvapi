import { Injectable, UnauthorizedException, UseGuards } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { validate } from "class-validator";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class localStrategy extends PassportStrategy(Strategy){
constructor(
    private readonly authService: AuthService
){
    super({
        usernameField: 'usuario', 
        passwordField: 'clave'
    })
}
 async validate(usuario: string, clave:string){
     const USER= await this.authService.validateUser(usuario, clave)
    if (!USER) throw new UnauthorizedException('USUARIO NO AUTORIZADO')
    return USER;
    }
}