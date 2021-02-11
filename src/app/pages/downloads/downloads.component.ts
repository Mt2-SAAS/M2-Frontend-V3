import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services';

import { ApplicationService } from '../../services/http/application.service';

@Component({
    selector: 'app-downloads',
    templateUrl: './downloads.component.html',
    styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {

    loading = true;
    downloads: any;

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
                    this.downloads = success;
                    this.loading = false;
                },
                (err) => {
                    console.error(err);
                }
            )
     }
}
