/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IdentityEntity } from './identity.entity';
import { IdentityDTO } from './identity.dto';
import { PictureEntity } from 'src/Picture/picture.entity';
import { PictureDTO } from 'src/Picture/picture.dto';
import { LicenseDTO } from 'src/license/license.dto';
import { LicenseEntity } from 'src/license/license.entity';

@Injectable()
export class IdentityService {
    constructor(@InjectRepository(IdentityEntity)
    private identityRepo:Repository<IdentityEntity>,

    @InjectRepository(PictureEntity)
    private pictureRepo:Repository<PictureEntity>,

    @InjectRepository(LicenseEntity)
    private licenseRepo:Repository<LicenseEntity>

    ){}

    async getAll(){
        return await this.identityRepo.find();
    }

    async getUser(id:number){
        const user = await this.identityRepo.findOne(id);
        if(!user){
            throw new HttpException('Not Found in Database',HttpStatus.NOT_FOUND);
        }
        return user;
    }


    async getPicture(id:number){
        const pic = await this.pictureRepo.findOne(id);
        if(!pic){
            throw new HttpException('Not Picture in Database for given ID',HttpStatus.NOT_FOUND);
        }
        return pic;
    }
    
    async getLicense(id:number){
        const lic = await this.licenseRepo.findOne(id);
        if(!lic){
            throw new HttpException('Not License in Database for given ID',HttpStatus.NOT_FOUND);
        }
        return lic;
    }
  
  
    async addUser(data:IdentityDTO){
        const user = this.identityRepo.create(data);
        await this.identityRepo.save(user);
        return "User Added";
    }

   
    async addPicture(data:PictureDTO){
        if(!data){
            return "No Pic Found";
        }
        const pic=  this.pictureRepo.create(data);
        await this.pictureRepo.save(pic);
        return "Picture Added";
    }

    async addLicense(data:LicenseDTO){
        if(data[0] == null || data[1] == null){
            return "Add Both Sides Please";
        }
        const Data={
            license_front:data[0],
            license_back:data[1]
        }
        const lic = this.licenseRepo.create(Data);
        await this.licenseRepo.save(lic);
        return "License Added";
    }

}
