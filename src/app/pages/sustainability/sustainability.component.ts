import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services';

@Component({
    selector: 'app-sustainability',
    templateUrl: './sustainability.component.html'
})
export class SustainabilityComponent implements OnInit {
    constructor(
        private title: TitleService
    ) { }

    ngOnInit() {
        this.title.setTitle(this.title.servername + ' -  Donaciones');
    }
}
