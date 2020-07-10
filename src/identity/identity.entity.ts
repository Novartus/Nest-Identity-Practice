import { Entity, PrimaryGeneratedColumn, Column, OneToMany,  } from "typeorm";
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
        unique:true,
        type:'varchar',
        length:255
    })
    email:string;

    @Column({
        unique:true,
        type:'int'
    })
    phone_number:number;
   
    @Column()
    role:boolean;

    @Column('int')
    group_number:number;

    @OneToMany(()=> PictureEntity,pictureEntity =>pictureEntity.pic_id )
    pictureEntity:PictureEntity;

    @OneToMany(()=> LicenseEntity,licenseEntity =>licenseEntity.license_id )
    licenseEntity:LicenseEntity;
}