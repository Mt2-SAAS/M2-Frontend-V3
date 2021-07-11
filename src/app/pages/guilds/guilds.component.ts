import { Component, OnInit } from '@angular/core';
import { TitleService, ApplicationService } from 'src/app/services';

@Component({
    selector: 'app-guilds',
    templateUrl: './guilds.component.html',
    styleUrls: ['./guilds.component.css']
})
export class GuildsComponent implements OnInit {


    cargando = true;
    gremios: any;

    // Paginator info
    pagina = 1;
    realpag = 1;
    nextURL: string = '';
    previustURL: string = '';
    total: number = 0;
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
                    this.gremios = success.results;
                    this.total = success.count;
                    this.nextURL = success.next;
                    this.previustURL = success.previous;
                    this.cargando = false;
                    this.boton = true
                },
                err => {
                    console.error(err);
                }
            );
    }

    getNexGuild() {
        this.boton = false;
        this.realpag = this.realpag + 1;
        this.pagina = this.pagina + 20;
        this.getData(this.realpag);
    }
    getPrevGuild() {
        this.boton = false;
        this.realpag = this.realpag - 1;
        this.pagina = this.pagina - 20;
        this.getData(this.realpag);
    }
}
