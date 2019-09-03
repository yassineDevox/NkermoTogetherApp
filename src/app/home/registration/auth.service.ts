import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registerURL ="http://localhost:9090/register"
  
  constructor(private _httpClient:HttpClient) { }

  registerUser(userInfo:any){
    return this._httpClient.post<any>(this.registerURL,userInfo)
  }
}
