import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('group')
export class GroupEntity{

    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column('int')
    group_id:number;

    @Column('text')
    group_name:string;

}