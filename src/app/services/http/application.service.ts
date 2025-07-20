import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Env
import { environment } from '../../../environments/environment';

// Interfaces
import { InitialData } from '../../store/interfaces/initial_data.interfaces';


@Injectable()
export class ApplicationService {

    apiUrl = environment.baseUrl;
    serviceUrl = environment.serviceUrl;

    constructor(
        private http: HttpClient
    ) {}

    get_guilds(page: number = 1, per_page: number = 20) {
        const url = `${this.apiUrl}/api/v1/game/guilds?page=${page}&per_page=${per_page}`;
        return this.http.get(url);
    }

    get_players(page: number = 1, per_page: number = 20) {
        const url = `${this.apiUrl}/api/v1/game/players?page=${page}&per_page=${per_page}`;
        return this.http.get(url);
    }

    get_stats(site_slug: string) {
        const url = `${this.apiUrl}/api/v1/game/sites/${site_slug}/stats`;
        return this.http.get(url);
    }

    get_downloads(projectId: string) {
        const url = `${this.serviceUrl}/api/v1/game/downloads/site/${projectId}?page=1&per_page=20`;
        return this.http.get(url);
    }

    get_initial_data(slug: string) {
        const url = `${this.serviceUrl}/api/v1/game/sites/slug/${slug}`;
        return this.http.get<InitialData>(url);
    }

}
