import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Componets
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { GuildsComponent } from './guilds/guilds.component';
import { TermsComponent } from './terms/terms.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { SuccessComponent } from './success/success.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';

// Guards
import { AuthGuardService } from '../services';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'guilds', component: GuildsComponent },
    { path: 'terminos', component: TermsComponent },
    { path: 'downloads', component: DownloadsComponent },
    { path: 'success', component: SuccessComponent },
    { path: 'sustainability', component: SustainabilityComponent},
    // Lazy Load Routes
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'user',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canLoad: [AuthGuardService],
        canActivate: [AuthGuardService]
    },
    {
        path: 'pages',
        loadChildren: () => import('./custom/custom.module').then(m => m.CustomPagesModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule {}
