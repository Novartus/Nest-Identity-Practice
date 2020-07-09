import { IsUrl } from "class-validator";

export class PictureDTO{
    @IsUrl()
    pic_url:string;
}