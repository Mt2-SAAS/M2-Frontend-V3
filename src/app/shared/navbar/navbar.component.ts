import { Component, OnInit } from '@angular/core';

// Service
import { AuthService } from 'src/app/services';

// NGRX
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { Image } from '../../store/interfaces/initial_data.interfaces';

// Environment
import { environment } from '../../../environments/environment';

// TODO: Remove this when the app is ready
// We need to move to another file
// const IMG_BG = 'bg'; // Background image type
const IMG_LOGO = 'logo'; // Logo image type


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    image: Image = {
        image_type: '',
        file_path: '',
        filename: '',
        original_filename: '',
        image: ''
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
                    if(img.image_type === IMG_LOGO) {
                        this.image.image = `${environment.assetsUrl}${img.file_path}`;
                    }
                })
            });
    }
}
