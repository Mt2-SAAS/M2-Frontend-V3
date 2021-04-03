import { Component, OnInit } from '@angular/core';

import { ApplicationService } from 'src/app/services';

@Component({
    selector: 'app-serverinfo',
    templateUrl: './serverinfo.component.html'
})
export class ServerInfoComponent implements OnInit {

    cargando = true;
    estadisticas: any;

    constructor(
        private services: ApplicationService
    ) { }

    ngOnInit() { 
        this.getData();
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

}
