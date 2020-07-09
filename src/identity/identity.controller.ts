/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { IdentityService } from './identity.service';
import { IdentityDTO } from './identity.dto';

@Controller('identity')
export class IdentityController {
    constructor(private identityService:IdentityService){}

    @Get()
    getAllUser(){
        return this.identityService.getAll();
    }

    @Get(':id')
    getUser(@Param('id') id:number){
        return this.identityService.getUser(id);
    }

    @Post()
    addUser(@Body() data:IdentityDTO){
        return this.identityService.addUser(data);
    }
}
