/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, Param, Post, Body, UsePipes } from '@nestjs/common';
import { IdentityService } from './identity.service';
import { IdentityDTO } from './identity.dto';
import { ValidationPipe } from '../shared/validation.pipe';
import { PictureDTO } from 'src/Picture/picture.dto';
import { LicenseDTO } from 'src/license/license.dto';

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
    // @UsePipes(new ValidationPipe())
    addPicture(@Body() data:PictureDTO){
        return this.identityService.addPicture(data);
    }

    @Post('license')
    @UsePipes(new ValidationPipe())
    addLicense(@Body() data:LicenseDTO){
        return this.identityService.addLicense(data);
    }


}
