import { Component, OnInit } from '@angular/core';

import { TitleService } from 'src/app/services';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    constructor(
        private title: TitleService
    ) { }

    ngOnInit() {
        this.title.setTitle(this.title.servername + ' -  Inicio');
     }
}
