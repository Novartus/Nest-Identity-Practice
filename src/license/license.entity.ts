import { Entity,  PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { IdentityEntity } from "src/identity/identity.entity";

@Entity('license')
export class LicenseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    // @Column('text')
    // user:string;

    @Column('text')
    license_front:string;
    
    @Column('text')
    license_back:string;
   
    @ManyToOne(() => IdentityEntity, user => user.licenses)
    @JoinColumn({ name: 'license_id' })
    user_id: LicenseEntity;
  
}