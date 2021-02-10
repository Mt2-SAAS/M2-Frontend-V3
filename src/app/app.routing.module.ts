import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NgModule } from '@angular/core';

import { BootstrapComponent } from './bootstrap/bootstrap.component';


const RootRoutes: Routes = [
    {
        path: '',
        component: BootstrapComponent,
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    }
];

const RouterConfig: ExtraOptions = {
    useHash: true
};

@NgModule({
    imports: [
        RouterModule.forRoot(RootRoutes, RouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
