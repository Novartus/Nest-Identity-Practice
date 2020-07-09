import { Entity,  PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { IdentityEntity } from "src/identity/identity.entity";

@Entity('picture')
export class PictureEntity{
    @PrimaryGeneratedColumn('increment')
    pic_id:number;

    @Column()
    identity_id:number;

    @Column('text')
    pic_url:string;

    @ManyToOne(() => IdentityEntity, identity =>identity.id)
    @JoinColumn({name:"identity_id"})
    identity:IdentityEntity;
}