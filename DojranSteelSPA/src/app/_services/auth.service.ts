import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions, Response } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  proxyurl = 'https://cors-anywhere.herokuapp.com/';
  baseUrl = environment.apiUrl + 'auth/';
  userToken: any;
  jwtHelper = new JwtHelperService();
  decodedToken: any;

constructor(private http: HttpClient) { }

login(model: any) {
  return this.http
  .post(this.baseUrl + 'login', model)
  .pipe(
    map((response: any) => {
    const user = response;
    if (user) {
      localStorage.setItem('token', user.tokenString);
      this.userToken = user.tokenString;
      this.decodedToken = this.jwtHelper.decodeToken(this.userToken);
    }
  }));
}

loggedIn() {
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
}

}
