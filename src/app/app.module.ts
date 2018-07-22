import { RouterRoutingModule } from './router/router-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeMessageComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    RouterRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
