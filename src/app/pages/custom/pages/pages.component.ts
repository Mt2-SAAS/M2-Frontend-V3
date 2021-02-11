import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    // styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
    
    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        let id = this.route.snapshot.params.slug;
        console.log(id);
    }
}
