import { Entity,  PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('picture')
export class PictureEntity{
    @PrimaryGeneratedColumn('increment')
    pic_id:number;

    @Column('text')
    pic_url:string;
}