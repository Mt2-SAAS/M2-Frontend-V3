import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// Components
import { DownloadsComponent } from './downloads/downloads.component';
import { SuccessComponent } from './success/success.component';
import { GuildsComponent } from './guilds/guilds.component';
import { PlayersComponent } from './players/players.component';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';

// Local Modules
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routing';




@NgModule({
    declarations: [
        DownloadsComponent,
        SuccessComponent,
        GuildsComponent,
        PlayersComponent,
        HomeComponent,
        TermsComponent,
        SustainabilityComponent
    ],
    imports: [
        // CommonModule,
        SharedModule,
        PagesRoutingModule
    ],
    exports: [],
    providers: [],
})
export class PagesModule {}
