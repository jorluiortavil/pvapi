import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
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
}