import { createUserDto } from "./create.user.dto";
import { PartialType } from '@nestjs/mapped-types';

export class editUserDto extends PartialType(createUserDto){

}