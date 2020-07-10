/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IdentityEntity } from './identity.entity';
import { IdentityDTO } from './identity.dto';

import { PictureEntity } from 'src/Picture/picture.entity';
import { PictureDTO } from 'src/Picture/picture.dto';

import { LicenseEntity } from 'src/license/license.entity';

import { GroupEntity } from 'src/Group/group.entity';
import { GroupDTO } from 'src/Group/group.dto';

@Injectable()
export class IdentityService {

    constructor(
    @InjectRepository(IdentityEntity)
    private identityRepo:Repository<IdentityEntity>,

    @InjectRepository(PictureEntity)
    private pictureRepo:Repository<PictureEntity>,

    @InjectRepository(LicenseEntity)
    private licenseRepo:Repository<LicenseEntity>,

    @InjectRepository(GroupEntity)
    private groupRepo:Repository<GroupEntity>

    ){}

//---------------GETALL Methods--------------------------

    async getAllUsers(){
        return await this.identityRepo.find();
    }

    async getAllPictures(){
        return await this.pictureRepo.find();
    }

    async getAllLicenses(){
        return await this.licenseRepo.find();
    }

    async getAllGroups(){
        return await this.groupRepo.find();
    }


//---------------GET Methods--------------------------

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

    async getGroup(id:number){
        const group = await this.groupRepo.findOne(id);
        if(!group){
            throw new HttpException('Not Group in Database for given ID',HttpStatus.NOT_FOUND);
        }
        return group;
    }
  
//---------------POST--------------------------
  
    async addUser(data:Partial<IdentityDTO>){
        if((data.role === false && (!data.group_number))||(data.role === true && data.group_number)){
            const user = this.identityRepo.create(data);
            await this.identityRepo.save(user);
            return "User Added";
        }else{
            return "Check Your Group Details";
        }
    }


    async addImage(data:PictureDTO){

        const pic = this.pictureRepo.create(data);
        await this.pictureRepo.save(pic);
        return "Pic Added" ;
    }

    
 
    
    addLicense(data1:any[],data2:any[]){
    if((data1[0] == null || data1[1] == null || data1.length!=2) 
    || (data2[0] == null || data2[1] == null || data2.length!=2))
    {
        return "Add 2 Sides Please";
    }
        const Data={
            license_front:data1[0].toString(),
            license_back:data1[1].toString(),
            license_front_original:data2[0].toString(),
            license_Back_original:data2[1].toString()
        }
        const lic = this.licenseRepo.create(Data);
        this.licenseRepo.save(lic);
        return "License Added??";
   }



    
    async addGroup(data:GroupDTO){
        const group = await this.groupRepo.create(data);
        await this.groupRepo.save(group);
        return "Group Added";
    }


//---------------PATCH--------------------------

    async patchUser(id:number, data:Partial<IdentityDTO>){
        await this.identityRepo.update(id,data);
        return "Data Updated";
    }

    async patchImage(id:number,data:PictureDTO){
        await this.pictureRepo.update(id,data);
        return "Pic Updated" ;
    }

    // async patchPicture(id:number, data:Partial<PictureDTO>){
    //     await this.pictureRepo.update(id,data);
    //     return "Pic Updated";
    // }

    // async patchLicense(id:number, data:Partial<LicenseDTO>){
    //     if(data[0] == null || data[1] == null){
    //         return "Add Both Sides Please";
    //     }
    //     const Data={
    //         license_front:data[0],
    //         license_back:data[1]
    //     }
    //     await this.licenseRepo.update(id,Data);
    //     return "License Updated";
    // }

    async patchGroup(id:number,data:Partial<GroupDTO>){
        await this.groupRepo.update(id,data);
        return "Group Details Updated";
    }

//---------------DELETE--------------------------

    async deleteUser(id:number){
        await this.identityRepo.delete(id);
        return "User Identity Deleted";
    }

    async deletePicture(id:number){
        await this.pictureRepo.delete(id);
        return "Pic Deleted";
    }

    async deleteLicense(id:number){
        await this.licenseRepo.delete(id);
        return "License Deleted";
    }

    async deleteGroup(id:number){
        await this.groupRepo.delete(id);
        return "Group Deleted";
    }
    
}