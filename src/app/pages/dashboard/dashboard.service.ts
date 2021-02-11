import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// Enviroment
import { environment } from '../../../environments/environment';

// Global Services
import { LocalStorageService } from 'src/app/services';


@Injectable()
export class DashboardService {

    baseUrl = environment.baseUrl;

    constructor(
        private http: HttpClient,
        private localstg: LocalStorageService
    ) {}

    private get_headers() {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': `Bearer ${this.localstg.get_token()} `
          })
        };

        return httpOptions;
    }

    private post<T>(url: string, body: any) {
        const data = JSON.stringify(body);
        return this.http.post(url, data, this.get_headers());
    }

    private get<T>(url: string) {
        return this.http.get(url, this.get_headers());
    }

    get_current_user() {
        const url = `${this.baseUrl}/api/current_user/`;
        return this.get(url);
    }

    get_current_players() {
        const url = `${this.baseUrl}/api/current_players/`;
        return this.get<any[]>(url);
    }

    get_donations_widget() {
        const url = `${this.baseUrl}/widget/`;
        return this.get(url);
    }

    change_password(payload: any) {
        const url = `${this.baseUrl}/api/change_pass/`;
        return this.post(url, payload);
    }

    use_payment_code(code: string){
        const url = `${this.baseUrl}/promo/${code}`;
        return this.get<{status: string}>(url);
    }

}
