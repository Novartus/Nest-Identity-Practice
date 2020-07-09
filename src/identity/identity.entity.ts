import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne,  } from "typeorm";
import { PictureEntity } from "src/Picture/picture.entity";
import { LicenseEntity } from "src/license/license.entity";

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

    @OneToMany(()=> PictureEntity,pictureEntity =>pictureEntity.pic_id )
    pictureEntity:PictureEntity;

    @OneToMany(()=> LicenseEntity,licenseEntity =>licenseEntity.license_id )
    licenseEntity:LicenseEntity;
}