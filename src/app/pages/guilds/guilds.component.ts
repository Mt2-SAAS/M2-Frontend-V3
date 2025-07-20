import { Component, OnInit } from '@angular/core';
import { TitleService, ApplicationService } from 'src/app/services';

@Component({
    selector: 'app-guilds',
    templateUrl: './guilds.component.html',
    styleUrls: ['./guilds.component.css']
})
export class GuildsComponent implements OnInit {


    loading = true;
    guilds: any[] = []; // Array to hold guild data

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
        this.title.setTitle('Top Gremios');
        this.getData();
    }

    async getData(page: number = 1) {
        await this.service.get_guilds(page)
            .subscribe(
                (success: any) => {
                    // Extract guild data from numbered array format
                    
                    this.guilds = success.response;
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

    getNexGuild() {
        if (this.nextURL) {
            this.boton = false;
            this.currentPage = this.currentPage + 1;
            this.getData(this.currentPage);
        }
    }
    
    getPrevGuild() {
        if (this.previustURL) {
            this.boton = false;
            this.currentPage = this.currentPage - 1;
            this.getData(this.currentPage);
        }
    }
}
