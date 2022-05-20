import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    Pagina404Component,
    NavbarComponent,
    
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
