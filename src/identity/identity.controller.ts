/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, Param, Post, Body, UsePipes } from '@nestjs/common';
import { IdentityService } from './identity.service';
import { IdentityDTO } from './identity.dto';
import { ValidationPipe } from '../shared/validation.pipe';

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
    @UsePipes(new ValidationPipe())
    addUser(@Body() data:IdentityDTO){
        return this.identityService.addUser(data);
    }
}
