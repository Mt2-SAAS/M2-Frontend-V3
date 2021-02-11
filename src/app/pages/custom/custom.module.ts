import { NgModule } from '@angular/core';

// Components 
import { PagesComponent } from './pages/pages.component';

// Local Modules
import { SharedModule } from '../../shared/shared.module';
import { PagesRoutingModule } from './custom.routing';

@NgModule({
    declarations: [
        PagesComponent
    ],
    imports: [
        SharedModule,
        PagesRoutingModule
    ],
    exports: [],
    providers: []

})
export class CustomPagesModule {}

