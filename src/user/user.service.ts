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
     const MUSER= await this.usersRepository.find();
     if (!MUSER) throw new NotFoundException("NO EXISTEN REGISTROS");
     return MUSER;
}
async getOne(id:number){
    const GUSER = await this.usersRepository.findOne(id);
    if (!GUSER) throw new NotFoundException("NO HAY REGISTRO PARA EL ID");
    return GUSER;
}
async createOne(dto:createUserDto){
    const CUSER = this.usersRepository.create(dto as any);
    return await this.usersRepository.save(CUSER);
}
async updateOne(id:number, dto:editUserDto){
    const UUSER = await this.usersRepository.findOne(id);
    if (!UUSER) throw new NotFoundException("NO HAY REGISTRO PARA EL ID");
    const EUSER = Object.assign(UUSER, dto);
    return await this.usersRepository.save(EUSER);
}
async deleteOne(id:number){
    const DUSER = await this.usersRepository.delete([id]);
    if (!DUSER) throw new NotFoundException("NO HAY REGISTRO PARA EL ID");
    return DUSER;
}
async findOne(usuario: string){
    const FUSER=await this.usersRepository.findOne({usuario}); 
    if (!FUSER) throw new NotFoundException("NO HAY REGISTRO PARA ESTE USUARIO");
    return FUSER;
}
}
