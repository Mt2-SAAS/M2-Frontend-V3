import { Component, OnInit } from '@angular/core';

// Services
import { TitleService, ApplicationService } from 'src/app/services';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

    loading = true;
    players: any[] = []; // Array to hold player data

    // Paginator info
    currentPage = 1;
    nextURL: boolean = false;
    previustURL: boolean = false;
    total: number = 0;
    totalPages: number = 0;
    perPage: number = 0;
    boton = true;

    constructor(
        private title: TitleService,
        private service: ApplicationService
    ) { }

    ngOnInit() {
        this.title.setTitle('Top Jugadores');
        this.getData();
    }

    getData(page: number = 1) {
        this.service.get_players(page)
            .subscribe(
                (success: any) => {
                    this.players = success.response;
                    this.total = success.total;
                    this.totalPages = success.total_pages;
                    this.perPage = success.per_page;
                    this.nextURL = success.has_next;
                    this.previustURL = success.has_prev;
                    this.currentPage = success.page;
                    this.loading = false;
                    this.boton = true
                },
                err => {
                    console.error(err);
                }
            );
    }

    getNexPlayer() {
        if (this.nextURL) {
            this.boton = false;
            this.currentPage = this.currentPage + 1;
            this.getData(this.currentPage);
        }
    }
    
    getPrevPlayer() {
        if (this.previustURL) {
            this.boton = false;
            this.currentPage = this.currentPage - 1;
            this.getData(this.currentPage);
        }
    }

}
