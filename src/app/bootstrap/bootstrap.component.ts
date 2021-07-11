import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import { StartGetInitialData } from '../store/actions/initial_data.actions';
import { Page } from '../store/interfaces/initial_data.interfaces';
import { AppComponent } from '../app.component';



@Component({
    selector: 'app-bootstrap',
    templateUrl: './bootstrap.component.html'
})
export class BootstrapComponent implements OnInit {

    footer_menu_enable!: Boolean;
    footer_info_enable!: Boolean;
    footer_menu!: Page[];
    footer_info!: string;
    forum_url!: string;

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit() { 
        this.subscribe();
        
        this.get_data();
        //console.log('Sisa mi perro')
    }

    subscribe() {
        this.store.select('init').subscribe(({
            data: {
                footer_menu_enable,
                footer_info_enable,
                footer_info,
                footer_menu,
                forum_url,
                images
            }
        }) => {
            this.footer_menu_enable = footer_menu_enable;
            this.footer_info_enable = footer_info_enable;
            this.footer_info = footer_info;
            this.footer_menu = footer_menu;
            this.forum_url = forum_url;

            // If u are in a navigator load backgroud
            AppComponent.isBrowser.subscribe(isBrowser => {
                if (isBrowser) {

                    images.forEach( img => {
                        if(img.types === 'background'){
                           // Add new background image 
                           document.body.style.background = ` url( ${img.image} ) no-repeat`;
                           document.body.style.backgroundAttachment = 'fixed'
                        }
                    });
                
                }
            });

        })
    }

    get_data() {
        this.store.dispatch(StartGetInitialData());
    }
}
