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
        HostnameService
    ],
})
export class ServicesModule {}
