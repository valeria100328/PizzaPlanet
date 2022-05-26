import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PizzaRegisterComponent } from './components/pizza-register/pizza-register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: '404', component: Pagina404Component },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'pizzalist', component: PizzaListComponent },
    { path: 'register', component: PizzaRegisterComponent },
    { path: '**', redirectTo: 'register', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
