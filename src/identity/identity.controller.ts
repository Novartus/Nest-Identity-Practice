/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, Param, Post, Body, UsePipes, Put } from '@nestjs/common';
import { ValidationPipe } from '../shared/validation.pipe';

import { IdentityService } from './identity.service';

import { IdentityDTO } from './identity.dto';
import { PictureDTO } from 'src/Picture/picture.dto';
import { LicenseDTO } from 'src/license/license.dto';
import { GroupDTO } from 'src/Group/group.dto';

@Controller('identity')
export class IdentityController {
    constructor(private identityService:IdentityService){}
    
    //-----------------GET--------------------

    @Get()
    getAllUser(){
        return this.identityService.getAll();
    }

    @Get(':id')
    getUser(@Param('id') id:number){
        return this.identityService.getUser(id);
    }


    @Get('pic/:id')
    getPic(@Param('id') id:number){
        return this.identityService.getPicture(id);
    }

    @Get('license/:id')
    getLic(@Param('id') id:number){
        return this.identityService.getLicense(id);
    }

    //-----------------POST--------------------

    @Post()
    @UsePipes(new ValidationPipe())
    addUser( @Body() data:IdentityDTO){
        return this.identityService.addUser(data);
    }

    @Post('pic')
    addPicture(@Body() data:PictureDTO){
        return this.identityService.addPicture(data);
    }

    @Post('license')
    @UsePipes(new ValidationPipe())
    addLicense(@Body() data:LicenseDTO){
        return this.identityService.addLicense(data);
    }

    @Post('group')
    @UsePipes(new ValidationPipe())
    addGroup(@Body() data:GroupDTO){
        return this.identityService.addGroup(data);
    }
    
    //-----------------PUT--------------------

    @Put(':id')
    @UsePipes(new ValidationPipe())
    updateUser(@Param('id') id:number, @Body('data') data:Partial<IdentityDTO>){
        return this.identityService.updateUser(id,data);
    }
}
