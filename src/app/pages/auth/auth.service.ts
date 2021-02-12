import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Interfaces
import { User, AccountSend } from './auth.interfaces';

// Enviroment
import { environment } from '../../../environments/environment';

// Global Services
import { LocalStorageService } from 'src/app/services';


@Injectable()
export class AuthService {

    baseUrl = environment.baseUrl;

    constructor(
        private http: HttpClient,
        private localstg: LocalStorageService
    ) {}

    private get_headers() {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
          })
        };

        return httpOptions;
    }

    private post<T>(url: string, body: any) {
        return this.http.post(url, body, this.get_headers());
    }

    private get<T>(url: string) {
        return this.http.get(url, this.get_headers());
    }

    auth(payload: User) {
        const url = `${this.baseUrl}/api/token/`;
        return this.post(url, payload).pipe(
            map( (res: any) => {
                // Save the Token and only return token
                this.localstg.set_token(res.refresh);
                return res.refresh;
            })
        );
    }

    register(payload: AccountSend) {
        const url = `${this.baseUrl}/api/signup/`;
        const body = JSON.stringify(payload);
        return this.post(url, body);
    }

    active(payload: string) {
        const url = `${this.baseUrl}/api/active/${payload}/`;
        return this.get(url);
    }

    verify_user(username: string) {
        const url = `${this.baseUrl}/api/info/${username}`;
        return this.get(url);
    }

}
