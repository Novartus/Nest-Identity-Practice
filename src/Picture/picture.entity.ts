import { Entity,  PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, } from "typeorm";
import { IdentityEntity } from "src/identity/identity.entity";
import { LicenseEntity } from "src/license/license.entity";

@Entity('picture')
export class PictureEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column('text')
    originalname:string;

    @Column('text')
    filename:string;
   
    @ManyToOne(() => IdentityEntity, user => user.pictures)
    @JoinColumn({ name: 'picture_id' })
    picture_id: LicenseEntity;
}