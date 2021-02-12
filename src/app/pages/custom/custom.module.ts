import { NgModule } from '@angular/core';

// Components 
import { PagesComponent } from './pages/pages.component';

// Local Modules
import { SharedModule } from '../../shared/shared.module';
import { PagesRoutingModule } from './custom.routing';

// Markdown module
import { MarkdownModule } from 'ngx-markdown';

// Local Services
import { CustomService } from './custom.service';

@NgModule({
    declarations: [
        PagesComponent
    ],
    imports: [
        SharedModule,
        PagesRoutingModule,
        MarkdownModule.forChild()
    ],
    exports: [
        PagesComponent
    ],
    providers: [
        CustomService
    ]

})
export class CustomPagesModule {}

