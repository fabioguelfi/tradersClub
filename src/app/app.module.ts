import { RouterRoutingModule } from './router/router-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';
import { FindListComponent } from './components/find-list/find-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './components/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeMessageComponent,
    FindListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    RouterRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
