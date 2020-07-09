import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('User')
export class IdentityEntity {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column('varchar')
    first_name:string;
    
    @Column('varchar')
    last_name:string;

    @Column({
        type:'varchar',
        length:255
    })
    email:string;

    @Column('int')
    phone_number:number;

    @Column()
    role:boolean;
}

