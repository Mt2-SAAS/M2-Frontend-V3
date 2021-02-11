import { NgModule } from '@angular/core';

// Routing
import { AuthRoutingModule } from './auth.routing';

// Components
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';

// Local Services
import { AuthService } from './auth.service';

// Shared Module
import { SharedModule } from '../../shared/shared.module';


@NgModule({
    declarations: [
        LoginComponent,
        JoinComponent
    ],
    imports: [
        SharedModule,
        AuthRoutingModule
    ],
    exports: [

    ],
    providers: [
        AuthService
    ],
})
export class AuthModule {}
