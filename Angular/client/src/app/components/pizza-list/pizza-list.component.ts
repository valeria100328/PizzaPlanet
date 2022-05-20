import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { PizzaService } from '../../services/pizza.service';

@Component({
    selector: 'app-pizza-list',
    templateUrl: './pizza-list.component.html',
    styleUrls: ['./pizza-list.component.css'],
})
export class PizzaListComponent implements OnInit {

    listaPizzas: Pizza[] = [];

    constructor(public _pizzaservice: PizzaService) {}

    ngOnInit(): void {
        this.obtenerPizzas()
    }

    obtenerPizzas(){
        this._pizzaservice.getPizzas().subscribe(data => {
            console.log(data);
            this.listaPizzas = data
        }, error => {
            console.log(error);
        })
    }


}
