import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Routing
import { DashboardRoutingModule } from './dashboard.routing';

// Shared Module
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonationsComponent } from './donations/donations.component';
import { MainComponent } from './main/main.component'
import { PasswordComponent } from './password/password.component';
import { PromoComponent } from './promotions/promotions.component';
import { PlayersComponent } from './players/players.component';

// Local Services
import { DashboardService } from './dashboard.service';





@NgModule({
    declarations: [
        DashboardComponent,
        DonationsComponent,
        MainComponent,
        PasswordComponent,
        PromoComponent,
        PlayersComponent
    ],
    imports: [
        SharedModule,
        DashboardRoutingModule,
        RouterModule
    ],
    exports: [],
    providers: [
        DashboardService
    ],
})
export class DashboardModule {}
