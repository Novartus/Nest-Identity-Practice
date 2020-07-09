import { IsString, IsBoolean, IsEmail, IsMobilePhone } from 'class-validator';


export class IdentityDTO{
    @IsString()
    first_name:string;

    @IsString()
    last_name:string;

    @IsEmail()
    email:string;

    @IsMobilePhone()
    phone_number:number;

    @IsBoolean()
    role:boolean;
}