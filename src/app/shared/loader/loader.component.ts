import { Component, OnInit } from '@angular/core';

// Service
import { AuthService } from 'src/app/services';

@Component({
    selector: 'loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
    constructor(
        public auth: AuthService
    ) { }

    ngOnInit() { }
}
