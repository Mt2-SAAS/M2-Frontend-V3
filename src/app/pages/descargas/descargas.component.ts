import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services';

import { ApplicationService } from '../../services/http/application.service';

@Component({
    selector: 'app-descargas',
    templateUrl: './descargas.component.html',
    styleUrls: ['./descargas.component.css']
})
export class DescargasComponent implements OnInit {

    cargando = true;
    descargas: any;

    constructor(
        private title: TitleService,
        private services: ApplicationService
    ) { }

    ngOnInit() {
        this.title.setTitle(this.title.servername + ' -  Descargas');
        this.getData();
     }

     getData() {
         this.services.get_downloads()
            .subscribe(
                (success) => {
                    this.descargas = success;
                    this.cargando = false;
                },
                (err) => {
                    console.error(err);
                }
            )
     }
}
