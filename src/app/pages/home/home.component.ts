import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { TitleService } from 'src/app/services';

// NGRX
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    loading!: Boolean;
    facebook_url!: SafeResourceUrl;
    facebook_enable!: Boolean;

    constructor(
        private title: TitleService,
        private store: Store<AppState>,
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit() {
        this.title.setTitle('Inicio');
        this.subscribe();
    }

    subscribe() {
        this.store.select('init')
            .subscribe(({
                data: {
                    facebook_enable,
                    facebook_url
                },
                loading
            }) => {
                this.facebook_url = this.sanitizer.bypassSecurityTrustResourceUrl(facebook_url);
                this.facebook_enable = facebook_enable;
                this.loading = loading;
            })
    }
}
