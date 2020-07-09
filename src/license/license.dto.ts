import { IsArray } from 'class-validator';

export class LicenseDTO{
   @IsArray()
    license:string[];
}