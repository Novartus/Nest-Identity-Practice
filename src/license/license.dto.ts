import { IsArray } from 'class-validator';

export class LicenseDTO{
   @IsArray()
    licenseSides:any[];
}