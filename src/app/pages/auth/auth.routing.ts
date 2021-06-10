import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import { ActiveComponent } from './active/active.component';
import { ResetPasswordComponent, ProcessPasswordComponent } from './loss'


const AuthRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'join', component: JoinComponent },
    { path: 'active/:payload', component: ActiveComponent},
    { path: 'reset_password', component: ResetPasswordComponent},
    { path: 'process_password/:payload', component: ProcessPasswordComponent}
];

@NgModule({
    imports: [RouterModule.forChild(AuthRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
