import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// Components
import { DownloadsComponent } from './downloads/downloads.component';
import { SuccessComponent } from './success/success.component';
import { GuildsComponent } from './guilds/guilds.component';
import { PlayersComponent } from './players/players.component';
import { HomeComponent } from './home/home.component';

// Local Modules
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routing';

import { CustomPagesModule } from './custom/custom.module';



@NgModule({
    declarations: [
        DownloadsComponent,
        SuccessComponent,
        GuildsComponent,
        PlayersComponent,
        HomeComponent,
    ],
    imports: [
        // CommonModule,
        SharedModule,
        PagesRoutingModule,
        CustomPagesModule
    ],
    exports: [],
    providers: [],
})
export class PagesModule {}
