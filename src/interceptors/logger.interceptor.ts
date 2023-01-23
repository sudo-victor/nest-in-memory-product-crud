import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { catchError, map, Observable, throwError } from 'rxjs';
import { UserNotFoundError } from 'src/exceptions/user-not-found.exception';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        console.log('interceptor');
        return {
          status: 'APPROVED',
          data,
        };
      }),
      catchError((err: any) => {
        return throwError(() => new UserNotFoundError());
      }),
    );
  }
}
