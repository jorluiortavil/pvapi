import { IsNumber, IsString } from "class-validator";

export class createUserDto{
    @IsNumber()
    id?: number;

    @IsString()
    nombre: string;

    @IsString()
    usuario: string;

    @IsString()
    clave: string;

    @IsString() 
    correo: string;

    @IsString()
    telefono: string;

    @IsString()
    imagen: string;
    
    @IsString()
    rol: number; 
}