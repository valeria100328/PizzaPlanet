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
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditformComponent } from './components/editform/editform.component';
import { ListRoleComponent } from './admin/listsroles/listsroles.component';
import { ListUserComponent } from './admin/lists-users/lists-users.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RoleService } from './services/role.service';
import { UserService } from './services/user.service';
import { AutenticacionService } from './services/autenticacion.service';
import { PizzaService } from './services/pizza.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

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
        ListRoleComponent,
        ListUserComponent
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatIconModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        DragDropModule,
    ],
    providers: [
        RoleService,
        UserService,
        AutenticacionService,
        PizzaService,
        TokenInterceptorService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
