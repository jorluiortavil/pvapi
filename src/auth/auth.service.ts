import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import {compare} from 'bcryptjs';
import { users } from 'src/user/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService 
        ){
    }
    async validateUser(usuario:string, clave:string){
    const USER= await this.userService.findOne(usuario);
    if (USER && await compare(clave, USER.clave)){
        const {clave, ...rest} =USER;
        return rest;
    }
    return null;
    }
    login(user: users){
    const {id,...rest}= user;
    const payload = {sub: id};
    return {
        user, 
        accessToken: this.jwtService.sign(payload)
    }
    }
}
