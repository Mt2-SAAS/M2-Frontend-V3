import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Componets
import { AppComponent } from './app.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

// Custom Modules
import { SharedModule } from './shared/shared.module';
import { ServicesModule } from './services/services.module';
import { AppRoutingModule } from './app.routing.module';

import { ErrorInterceptor } from './services/error-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ServicesModule,
    AppRoutingModule,
    HttpClientModule,
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
