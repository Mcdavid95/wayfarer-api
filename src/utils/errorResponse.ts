import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ErrorResponse } from '../interfaces/response';

export class Exception extends HttpException {
  constructor( public responseObject: ErrorResponse) {
    super(responseObject, HttpStatus[responseObject.status])
  }

  // private status: number

  conflict(): Promise<HttpException> {
    return new Promise((resolve, reject) => {
      reject({
        error: 'err'
      })
    })
  }
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    

    response
      .status(status)
      .send(exception.getResponse());
  }
}

export const handleException = (status: string, message: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    reject(
      new Exception({
        status,
        message
      })
    )
  })
}