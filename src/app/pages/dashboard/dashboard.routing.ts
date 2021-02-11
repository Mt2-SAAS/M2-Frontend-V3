import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { DonationsComponent } from './donations/donations.component';
import { PasswordComponent } from './password/password.component';
import { PromoComponent } from './promotions/promotions.component';
import { PlayersComponent } from './players/players.component';


const DashboardRoutes: Routes = [
    { 
        path: '', 
        component: DashboardComponent,
        children: [
            { path: 'main', component: MainComponent },
            { path: 'donations', component: DonationsComponent },
            { path: 'password', component: PasswordComponent },
            { path: 'promotions', component: PromoComponent },
            { path: 'players', component: PlayersComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(DashboardRoutes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
