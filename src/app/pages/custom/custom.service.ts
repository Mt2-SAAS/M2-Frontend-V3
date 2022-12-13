import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Enviroment
import { environment } from '../../../environments/environment';


@Injectable()
export class CustomService {

    baseUrl = environment.baseUrl;

    constructor(
        private http: HttpClient
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
        const data = JSON.stringify(body);
        return this.http.post(url, data, this.get_headers());
    }

    private get<T>(url: string) {
        return this.http.get(url, this.get_headers());
    }

    get_page(slug: string, projectId: string) {
        const url = `${this.baseUrl}/api/v1/page-slug/${slug}/${projectId}`;
        return this.get(url);
    }

}
