import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  canActivate() {
    console.log('Checking to see if you are logged in.');
    return true;
  }

  canActivateChild() {
    console.log('Checking child route access.');
    return true;
  }
}