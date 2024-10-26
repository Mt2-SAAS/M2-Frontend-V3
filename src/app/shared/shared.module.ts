import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';

// Navbar
import { NavbarComponent } from './navbar/navbar.component';

// Info Components
import { GuildInfoComponent } from './guildinfo/guildinfo.component';
import { PlayerInfoComponent } from './playerinfo/playerinfo.component';
import { ServerInfoComponent } from './serverinfo/serverinfo.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
    declarations: [
        NavbarComponent,
        GuildInfoComponent,
        PlayerInfoComponent,
        ServerInfoComponent,
        LoaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgxCaptchaModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxCaptchaModule,
        RouterModule,
        NavbarComponent,
        GuildInfoComponent,
        PlayerInfoComponent,
        ServerInfoComponent,
        LoaderComponent
    ],
    providers: [],
})
export class SharedModule {}
