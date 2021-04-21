import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate} from 'typeorm';
import {hash} from 'bcryptjs';
@Entity()
export class users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    usuario: string;

    @Column()
    clave: string;

    @Column()
    correo: string;

    @Column()
    telefono: string;

    @Column()
    imagen: string;
    
    @Column()
    rol: number;
    
@BeforeInsert()
@BeforeUpdate()
async hashClave(){
    if (!this.clave){
        return;
    }
    this.clave = await hash(this.clave, 10);
}
}