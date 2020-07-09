import { Entity,  PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('license')
export class LicenseEntity{
    @PrimaryGeneratedColumn('increment')
    license_id:number;

    @Column('text')
    license_front:string;
    
    @Column('text')
    license_back:string;
}