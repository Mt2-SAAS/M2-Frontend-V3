import { Component, OnInit } from '@angular/core';

// Services
import { TitleService } from 'src/app/services';
import { DashboardService } from '../dashboard.service';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

    loading: boolean = true;
    players: any[] = [];

    constructor(
        private title: TitleService,
        private http: DashboardService
    ) { }

    ngOnInit() {
        this.title.setTitle(this.title.servername + ' -  Personajes');
        this.getData();
    }

    getData() {
        this.http.get_current_players()
            .subscribe( 
                (success: any) => {
                    this.players = success;
                    this.loading = false
                }
             )
    }

}
