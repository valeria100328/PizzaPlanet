import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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

    eliminarPizza(id: string) {
        Swal.fire({
            title: 'Do you really want to buy? :) ',
            text: "This choice its an great idea",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, buy!'
        }).then((result) => {
            if (result.isConfirmed) {
                this._pizzaservice.deletePizza(id).subscribe(data => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Pizza Bought successfully!'
                    })
                    this.obtenerPizzas()
                }, error => {
                    console.log(error);
                })
            }
        })
    }

}
