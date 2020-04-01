import { ExtractJwt } from 'passport-jwt';
import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { CanActivate } from '@nestjs/common/interfaces/features/can-activate.interface';
import { Observable } from 'rxjs';

@Injectable()
export class JwtGuard implements CanActivate {

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    return true;
  }
}
