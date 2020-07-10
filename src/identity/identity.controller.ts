/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, Param, Post, Body, UsePipes, Patch, Delete, UseInterceptors, Res, UploadedFile, UploadedFiles } from '@nestjs/common';
import {  FileInterceptor, FilesInterceptor} from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { ValidationPipe } from '../shared/validation.pipe';

import { IdentityService } from './identity.service';

import { IdentityDTO } from './identity.dto';
import { GroupDTO } from 'src/Group/group.dto';
import { editFileName, pictureFileFilter,licenseFileFilter } from 'src/utils/file-upload.utils';
import { request } from 'https';

@Controller('identity')
export class IdentityController {
    static pic_id:number;
    constructor(private identityService:IdentityService, ){}
    
    //-----------------GET ALL Data--------------------

    @Get()
    getAllUsers(){
        return this.identityService.getAllUsers();
    }

    @Get('picture')
    getAllPictures(){
        return this.identityService.getAllPictures();
    }

    @Get('license')
    getAllLicenses(){
        return this.identityService.getAllLicenses();
    }

    @Get('groups')
    getAllGroups(){
        return this.identityService.getAllGroups();
    }

    //-----------------GET--------------------

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
    @UseInterceptors(
      FileInterceptor('image', {
        storage: diskStorage({
          destination: './files',
          filename: editFileName,
        }),
        fileFilter: pictureFileFilter,
      }),
    )
    async uploadedFile(@UploadedFile() file) {
    const response = {
        originalname: file.originalname,
        filename: file.filename,
      };
      return this.identityService.addImage(response);
    }

    @Post('license')
    @UseInterceptors(
      FilesInterceptor('image', 20, {
        storage: diskStorage({
          destination: './files',
          filename: editFileName,
        }),
        fileFilter: licenseFileFilter,
      }),
    )

    async uploadLicenseFiles(@UploadedFiles() files) {
      const responseOriginalName = [];
      const responseFileName = [];
     
      files.forEach(file => {
        const fileReponse = {
          originalname: file.originalname,
          filename: file.filename,
        };
        responseOriginalName.push(fileReponse.originalname);
        responseFileName.push(fileReponse.filename);
      }
      );
       return   this.identityService.addLicense(responseOriginalName,responseFileName);
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
    @UseInterceptors(
      FileInterceptor('image', {
        storage: diskStorage({
          destination: './files',
          filename: editFileName,
        }),
        fileFilter: pictureFileFilter,
      }),
    )
    async uploadedPatchFile(@Param('id') id:number,@UploadedFile() file) {
    const response = {
        originalname: file.originalname,
        filename: file.filename,
      };
      return this.identityService.patchImage(id,response);
    }

    @Patch('license/:id')
    @UseInterceptors(
        FilesInterceptor('image', 20, {
          storage: diskStorage({
            destination: './files',
            filename: editFileName,
          }),
          fileFilter: licenseFileFilter,
        }),
      )
      async patchLicenseFiles(@Param('id') id:number,@UploadedFiles() files) {
        const responseOriginalName = [];
        const responseFileName = [];
       
        files.forEach(file => {
          const fileReponse = {
            originalname: file.originalname,
            filename: file.filename,
          };
          responseOriginalName.push(fileReponse.originalname);
          responseFileName.push(fileReponse.filename);
        }
        );
         return   this.identityService.patchLicense(id,responseOriginalName,responseFileName);
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