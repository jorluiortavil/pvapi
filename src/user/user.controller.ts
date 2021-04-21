import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createUserDto } from './dtos/create.user.dto';
import { editUserDto } from './dtos/edit.user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){

    }
    @Get()
    async getMany(){
        return await this.userService.getMany();
    }
    @Get(':id')
    async getOne(@Param('id') id:number){
        return await this.userService.getOne(id);
    }
    @Post()
    async createOne(@Body() dto:createUserDto){
        return await this.userService.createOne(dto as any);
    }
    @Put(':id')
    async updateOne(@Param('id') id:number,@Body() dto:editUserDto ){
        return await this.userService.updateOne(id, dto);
    }
    @Delete(':id')
    async deleteOne(@Param('id') id:number){
        return await this.userService.deleteOne(id);
    }
}
