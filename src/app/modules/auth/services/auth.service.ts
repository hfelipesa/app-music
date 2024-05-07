import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL= environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  public sendCredentials(email:string, passqord:string):Observable<any>{
     
    const body={
      email,
      passqord
    }
    return this.httpClient.post(`${this.URL}/auth/auth`,body)
  }
}

