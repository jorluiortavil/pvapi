import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUserDto } from './dtos/create.user.dto';
import { editUserDto } from './dtos/edit.user.dto';
import { users } from './user.entity';

@Injectable()
export class UserService {
constructor (
    @InjectRepository(users)
    private readonly usersRepository: Repository<users>
) {}
async getMany(){
    return await this.usersRepository.find();
}
async getOne(id:number){
    return await this.usersRepository.findOne(id);
}
async createOne(dto:createUserDto){
    const CUSER = this.usersRepository.create(dto as any);
    return await this.usersRepository.save(CUSER);
}
async updateOne(id:number, dto:editUserDto){
    const UUSER = await this.usersRepository.findOne(id);
    if (!UUSER) throw new NotFoundException("ID NO ENCONTRADA");
    const EUSER = Object.assign(UUSER, dto);
    return await this.usersRepository.save(EUSER);
}
async deleteOne(id:number){
    return await this.usersRepository.delete([id]);
}
}
