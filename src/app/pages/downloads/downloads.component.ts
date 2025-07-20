import { Component, OnInit } from '@angular/core';
import { LocalStorageService, TitleService } from 'src/app/services';

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
        private services: ApplicationService,
        private local: LocalStorageService
    ) { }

    ngOnInit() {
        this.title.setTitle('Descargas');
        this.getData();
     }

     getData() {
         const projectId = this.local.get_item('site-uuid')
         this.services.get_downloads(projectId)
            .subscribe(
                (success: any) => {
                    this.downloads = success.response;
                    this.loading = false;
                },
                (err) => {
                    console.error(err);
                }
            )
     }
}
