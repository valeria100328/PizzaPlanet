import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaRegisterComponent } from './components/pizza-register/pizza-register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: '404', component: Pagina404Component },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'pizzalist', component: PizzaListComponent},
    { path: 'register', component: PizzaRegisterComponent },
    { path: '**', redirectTo: '404', pathMatch: 'full' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
