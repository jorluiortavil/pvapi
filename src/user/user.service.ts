import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
getMany(){
    return { ok: 'getMany'}
}
getOne(id:number){
    return { ok: 'getOne'}
}
createOne(){
    return { ok: 'createOne'}
}
updateOne(id:number){
    return { ok: 'updateOne'}
}
deleteOne(id:number){
    return { ok: 'deleteOne'}
}
}
