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

    get_guilds(page: number = 1) {
        const url = `${this.apiUrl}/api/guild_rank/?page=${page}`;
        return this.http.get(url);
    }

    get_players(page: number = 1) {
        const url = `${this.apiUrl}/api/player_rank/?page=${page}`;
        return this.http.get(url);
    }

    get_stats() {
        const url = `${this.apiUrl}/api/server_status/`;
        return this.http.get(url);
    }

    get_downloads() {
        const url = `${this.apiUrl}/api/downloads/`;
        return this.http.get(url);
    }

    get_initial_data(site: string) {
        const url = `${this.serviceUrl}/api/v1/site-slug/${site}`;
        return this.http.get<InitialData>(url);
    }

}
