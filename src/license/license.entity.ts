import { Entity,  PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { IdentityEntity } from "src/identity/identity.entity";

@Entity('license')
export class LicenseEntity{
    @PrimaryGeneratedColumn('increment')
    license_id:number;

    @Column()
    identity_id:number;

    @Column('text')
    license_front:string;
    
    @Column('text')
    license_back:string;

    @ManyToOne(() => IdentityEntity, identity =>identity.id)
    @JoinColumn({name:"identity_id"})
    identity:IdentityEntity;
}