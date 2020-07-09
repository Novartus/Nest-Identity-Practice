/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IdentityEntity } from './identity.entity';
import { IdentityDTO } from './identity.dto';

@Injectable()
export class IdentityService {
    constructor(@InjectRepository(IdentityEntity)
    private identityRepo:Repository<IdentityEntity>){}

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

    async addUser(data:IdentityDTO){
        const user = await this.identityRepo.create(data);
        await this.identityRepo.save(user);
        return "Data Added"
    }
}
