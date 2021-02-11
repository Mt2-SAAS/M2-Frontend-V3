import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';


const AuthRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'join', component: JoinComponent },
];

@NgModule({
    imports: [RouterModule.forChild(AuthRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
