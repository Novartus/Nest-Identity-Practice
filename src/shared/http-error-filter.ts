/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import{ Catch, ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        const errResponse ={
            code: status,
            timestamp : new Date().toLocaleDateString(),
            path: request.url,
            method : request.method,
            message : exception.message || null
        }
        response.status(404).send(errResponse);
    }
    
}