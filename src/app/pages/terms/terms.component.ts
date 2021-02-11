import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services';

@Component({
    selector: 'app-terms',
    templateUrl: './terms.component.html'
})
export class TermsComponent implements OnInit {
    constructor(
        private title: TitleService
    ) { }

    ngOnInit() {
        this.title.setTitle(this.title.servername + ' -  Terminos y Condiciones');
    }
}
