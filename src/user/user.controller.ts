import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createUserDto } from './dtos/create.user.dto';
import { editUserDto } from './dtos/edit.user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){

    }
    @Get()
    getMany(){
        return this.userService.getMany();
    }
    @Get(':id')
    getOne(@Param('id') id:number){
        return this.userService.getOne(id);
    }
    @Post()
    createOne( dto:createUserDto ){
        return this.userService.createOne();
    }
    @Put()
    updateOne(@Param('id') id:number, dto:editUserDto ){
        return this.userService.updateOne(id);
    }
    @Delete()
    deleteOne(@Param('id') id:number){
        return this.userService.deleteOne(id);
    }
}
