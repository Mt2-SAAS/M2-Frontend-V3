import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Markdown module
import { MarkdownModule } from 'ngx-markdown';

// Componets
import { AppComponent } from './app.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

// Custom Modules
import { SharedModule } from './shared/shared.module';
import { ServicesModule } from './services/services.module';
import { AppRoutingModule } from './app.routing.module';

// Store
// Store and dev tools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { appReducers } from './store/app.reducers';
import { EffectsArray } from './store/effects/index';

import { ErrorInterceptor } from './services/error-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Env
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SharedModule,
    ServicesModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),    
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot( EffectsArray ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    // JwtModule.forRoot(jwtOptions)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
