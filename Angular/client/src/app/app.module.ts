import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { PizzaRegisterComponent } from './components/pizza-register/pizza-register.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditformComponent } from './components/editform/editform.component';
import { ListsrolesComponent } from './admin/listsroles/listsroles.component';
import { ListsUsersComponent } from './admin/lists-users/lists-users.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        DashboardComponent,
        Pagina404Component,
        NavbarComponent,
        PizzaRegisterComponent,
        PizzaListComponent,
        EditformComponent,
        ListsrolesComponent,
        ListsUsersComponent,
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
