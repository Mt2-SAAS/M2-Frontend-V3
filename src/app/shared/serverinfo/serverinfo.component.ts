import { Component, OnInit } from '@angular/core';

import { ApplicationService } from 'src/app/services';

// NGRX
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';

@Component({
    selector: 'app-serverinfo',
    templateUrl: './serverinfo.component.html'
})
export class ServerInfoComponent implements OnInit {

    cargando = true;
    estadisticas: any;

    initial_level!: string;
    max_level!: string;
    rates!: string;
    last_online!: Boolean;

    constructor(
        private services: ApplicationService,
        private store: Store<AppState>
    ) { }

    ngOnInit() { 
        this.getData();
        this.subscribe();
    }

    getData() {
        this.services.get_stats()
            // .pipe(
            //     map((res: any) => res.results)
            // )
            .subscribe(
                success => {
                    this.estadisticas = success;
                    this.cargando = false;
                },
                err => {
                    console.error(err);
                }
            );
    }

    subscribe() {
        this.store.select('init')
            .subscribe(({
                data: {
                    initial_level,
                    max_level,
                    rates,
                    last_online
                }
            }) => {
                this.initial_level = initial_level;
                this.max_level = max_level;
                this.rates = rates;
                this.last_online = last_online;
            })
    }

}
