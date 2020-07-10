import { IsNumber, IsString } from "class-validator";

export class GroupDTO{
    @IsNumber()
    group_id:number;

    @IsString()
    group_name:string;
}