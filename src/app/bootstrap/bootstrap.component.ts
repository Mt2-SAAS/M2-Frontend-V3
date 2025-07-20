import { Component, OnInit } from '@angular/core';

//NGRX
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import { StartGetInitialData } from '../store/actions/initial_data.actions';

// Inteface
import { Page } from '../store/interfaces/initial_data.interfaces';

// App Component
import { AppComponent } from '../app.component';

// Environment
import { environment } from '../../environments/environment';
// import { HostnameService } from '../services';

// TODO: Remove this when the app is ready
// We need to move to another file
const IMG_BG = 'bg'; // Background image type
// const IMG_LOGO = 'logo'; // Logo image type


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
        private store: Store<AppState>,
    ) { }

    ngOnInit() { 
        this.subscribe();
        this.get_data();
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
                        if(img.image_type === IMG_BG){
                           // Add new background image 
                           let image_url = `${environment.assetsUrl}${img.file_path}`;
                           document.body.style.background = `url( ${image_url} ) no-repeat`;
                           document.body.style.backgroundSize = 'cover';
                           document.body.style.backgroundAttachment = 'fixed';
                        }
                    });
                
                }
            });

        })
    }

    get_data() {
        // This is commented because the app is not ready yet
        // We need to define a new way to get the initial slug
        
        /*let hostSplit;
        const hostname = this.hnService.getHostname();

        if (hostname == 'localhost') {
            hostSplit = hostname
        } else {
            hostSplit = hostname.split('.')[0]
        }*/
        
        this.store.dispatch(StartGetInitialData({slug: "string"}));
    }
}
