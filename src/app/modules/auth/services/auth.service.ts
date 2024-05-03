import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public sendCredentials(email:string, passqord:string):void{
    /* console.log(email,passqord) */
  }
}
