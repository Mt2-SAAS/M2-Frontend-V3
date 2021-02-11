import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// Services
import { TitleService } from 'src/app/services';
import { DashboardService } from '../dashboard.service';

@Component({
    selector: 'app-donations',
    templateUrl: './donations.component.html',
})
export class DonationsComponent implements OnInit {

    iframeUrl!: SafeResourceUrl;
    
    constructor(
        private title: TitleService,
        private dom: DomSanitizer,
        private service: DashboardService,
    ) {}

    ngOnInit() {
        this.title.setTitle(this.title.servername + ' -  Donaciones');
        this.getData();
     }

     getData() {
        this.service.get_donations_widget()
            .subscribe( ( response: any ) => {
                this.iframeUrl = this.dom.bypassSecurityTrustResourceUrl(response.widget);
            });
     }
}
