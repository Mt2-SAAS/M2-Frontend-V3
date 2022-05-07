import { Component, OnInit } from '@angular/core';

// Service
import { AuthService } from 'src/app/services';

// NGRX
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { Image } from '../../store/interfaces/initial_data.interfaces';

// Environment
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    image: Image = {
        types: '',
        image_url: '',
        name: ''
    }

    constructor(
        public auth: AuthService,
        private store: Store<AppState>
    ) { }

    ngOnInit() { 
        this.subscribe()
    }

    subscribe() {
        this.store.select('init')
            .subscribe(({
                data: {
                    images
                }
            }) => {
                images.forEach( img => {
                    if(img.types === 'logo') {
                        
                        // this.image = img;
                        this.image.image_url = `${environment.assetsUrl}${img.image_url}`;
                    }
                })
            });
    }
}
