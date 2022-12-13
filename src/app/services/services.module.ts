import { NgModule } from '@angular/core';

import {
    // Auth Services
    AuthService,
    AuthGuardService,
    TitleService,
    LocalStorageService,
    ApplicationService,
    HostnameService
  } from './index';
  
import { WINDOW_PROVIDERS } from './window.providers';


@NgModule({
    declarations: [],
    imports: [ ],
    exports: [],
    providers: [
        AuthService,
        AuthGuardService,
        TitleService,
        LocalStorageService,
        ApplicationService,
        HostnameService,
        WINDOW_PROVIDERS
    ],
})
export class ServicesModule {}
