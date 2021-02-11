import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { PagesComponent } from './pages/pages.component';

const PagesRoutes: Routes = [
    { path: ':slug', component: PagesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(PagesRoutes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
