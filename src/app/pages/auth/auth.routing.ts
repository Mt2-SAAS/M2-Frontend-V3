import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import { ActiveComponent } from './active/active.component';
import { EmailComponent, PasswordComponent } from './loss'


const AuthRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'join', component: JoinComponent },
    { path: 'active/:payload', component: ActiveComponent},
    { path: 'email', component: EmailComponent},
    { path: 'password', component: PasswordComponent}
];

@NgModule({
    imports: [RouterModule.forChild(AuthRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
