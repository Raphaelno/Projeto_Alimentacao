import { IsNotEmpty } from "class-validator";
import {Entity, PrimaryGeneratedColumn,Column,ManyToOne} from "typeorm";


@Entity({name: "tb_tema"})
export class Tema {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 50, nullable: false})
    temaPrincipal: string

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    descricao: string
    
}

