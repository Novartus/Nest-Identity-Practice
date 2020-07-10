// /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import { IsUrl } from "class-validator";

// export class PictureDTO{
//     @IsUrl()
//     pic_url:string;

// }

export interface PictureDTO{
    originalname: string,
    filename: string
}