import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { UserService } from "src/user/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        private userService: UserService,
        private config: ConfigService,
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.get<string>('JWT_TOKEN'),
        });
    }
async validate(payload: any){
    const {sub: id}=payload;
    return await this.userService.getOne(id);
}
}