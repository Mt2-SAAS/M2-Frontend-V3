import { Component, OnInit } from '@angular/core';

import { TitleService } from 'src/app/services';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    url: string = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMetin2Lamda%2F&tabs=timeline&width=590&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=661017491492084"

    constructor(
        private title: TitleService
    ) { }

    ngOnInit() {
        this.title.setTitle(this.title.servername + ' -  Inicio');
     }
}
