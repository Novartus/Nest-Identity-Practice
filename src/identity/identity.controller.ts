/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, Param, Post, Body, UsePipes, Patch, Delete } from '@nestjs/common';
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


    @Get('picture/:id')
    getPicture(@Param('id') id:number){
        return this.identityService.getPicture(id);
    }

    @Get('license/:id')
    getLicense(@Param('id') id:number){
        return this.identityService.getLicense(id);
    }

    @Get('group/:id')
    getGroup(@Param('id') id:number){
        return this.identityService.getGroup(id);
    }

    //-----------------POST--------------------

    @Post()
    @UsePipes(new ValidationPipe())
    addUser( @Body() data:Partial<IdentityDTO>){
        return this.identityService.addUser(data);
    }

    @Post('picture')
    addPic(@Body() data:PictureDTO){
        return this.identityService.addPicture(data);
    }

    @Post('license')
    @UsePipes(new ValidationPipe())
    addLic(@Body() data:LicenseDTO){
        return this.identityService.addLicense(data);
    }

    @Post('group')
    @UsePipes(new ValidationPipe())
    addGroup(@Body() data:GroupDTO){
        return this.identityService.addGroup(data);
    }
    
    //-----------------PATCH--------------------

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    patchUser(@Param('id') id:number, @Body() data:Partial<IdentityDTO>){
        return this.identityService.patchUser(id,data);
    }

    @Patch('picture/:id')
    @UsePipes(new ValidationPipe())
    patchPic(@Param('id') id:number, @Body() data:Partial<PictureDTO>){
        return this.identityService.patchPicture(id,data);
    }

    @Patch('license/:id')
    @UsePipes(new ValidationPipe())
    patchLic(@Param('id') id:number, @Body() data:Partial<LicenseDTO>){
        return this.identityService.patchLicense(id,data);
    }

    @Patch('group/:id')
    @UsePipes(new ValidationPipe())
    patchGroup(@Param('id') id:number, @Body() data:Partial<GroupDTO>){
        return this.identityService.patchGroup(id,data);
    }

    //-----------------DELETE--------------------

    @Delete(':id')
    @UsePipes(new ValidationPipe())
    deleteUser(@Param('id') id:number){
        return this.identityService.deleteUser(id);
    }

    @Delete('picture/:id')
    @UsePipes(new ValidationPipe())
    deletePic(@Param('id') id:number){
        return this.identityService.deletePicture(id);
    }
    
    @Delete('license/:id')
    @UsePipes(new ValidationPipe())
    deleteLic(@Param('id') id:number){
        return this.identityService.deleteLicense(id);
    }

    @Delete('group/:id')
    @UsePipes(new ValidationPipe())
    deleteGroup(@Param('id') id:number){
        return this.identityService.deleteGroup(id);
    }

}
