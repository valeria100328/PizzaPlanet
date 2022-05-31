import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
//Se importaron el modelo y el servicio
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/services/pizza.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-pizza-register',
    templateUrl: './pizza-register.component.html',
    styleUrls: ['./pizza-register.component.css'],
})
export class PizzaRegisterComponent implements OnInit {

    pizzaForm: FormGroup;
    numbers = /^([0-9])*$/;
    titleForm = 'Create Pizza'
    id : string | null;

    constructor(private fb: FormBuilder, private pizzaservice: PizzaService, private router: Router, private idPizzaPath: ActivatedRoute) {
        this.pizzaForm = this.fb.group({
            name: ['', Validators.required],
            size: ['', [Validators.required,]],
            adition: ['', Validators.required],
            price: ['', [Validators.required, Validators.pattern(this.numbers)]],
        })
        this.id = this.idPizzaPath.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
        this.actions()
    }

    //verifica si el formulario registra
    addPizza(){
        console.log(this.pizzaForm)

    //consumo de nuestra api
        const data_pizza_form: Pizza = {
            name: this.pizzaForm.get('name')?.value,
            size: this.pizzaForm.get('size')?.value,
            adition: this.pizzaForm.get('adition')?.value,
            price: this.pizzaForm.get('price')?.value,
        }
        //Actuliza
        if(this.id !== null){
            this.pizzaservice.putPizza(this.id, data_pizza_form).subscribe(data => {
                this.router.navigate(['/dashboard']);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your Pizza has been update successfully',
                })

            }, error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Someting its happening',
                    text: 'Contact administrator'
                })
                
            })
        }else{
            this.pizzaservice.postPizza(data_pizza_form).subscribe(data => {
            this.router.navigate(['/dashboard']);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Pizza has been created successfully!',
            })
        }, error => {
            Swal.fire({
                icon: 'error',
                title: 'Algo esta pasando',
                text: 'Comuniquese con el administrador'
            })
            console.log(error)
        })
        }
    }

    actions() {
        if(this.id !==null){
            //actualizar
            this.titleForm = 'Update Pizza';
            this.pizzaservice.getPizza(this.id).subscribe(data => {
                this.pizzaForm.setValue({
                    name: data.name,
                    size: data.size,
                    adition: data.adition,
                    price: data.price
                })
            }, error => {
            })
        }
    }
}
