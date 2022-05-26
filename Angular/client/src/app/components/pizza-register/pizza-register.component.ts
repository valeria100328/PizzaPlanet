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
            _id: ['',  Validators.required],
            name: ['', Validators.required],
            size: ['', [Validators.required,]],
            adition: ['', Validators.required],
            price: ['15', [Validators.required, Validators.pattern(this.numbers)]],
        })
        this.id = this.idPizzaPath.snapshot.paramMap.get('_id');
        console.log(`%c Parametro de la url: ${this.id}`, 'color: red; font-size: 1rem;');
    }

    ngOnInit(): void {
        this.actions();
    }

    addPizza(){
        console.log(this.pizzaForm)
        const data_pizza_form:
        Pizza = {
            _id: this.pizzaForm.get('id')?.value,
            name: this.pizzaForm.get('name')?.value,
            size: this.pizzaForm.get('size')?.value,
            adition: this.pizzaForm.get('adition')?.value,
            price: this.pizzaForm.get('price')?.value,
        }
        console.log(data_pizza_form)
        if(this.id !== null){
            this.pizzaservice.putPizza(this.id, data_pizza_form).subscribe(data => {
                this.router.navigate(['/register']);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your Pizza has been update successfully',
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000
                })
            }, error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Someting its happening',
                    text: 'Contact administrator'
                })
                console.log(error)
            })
        }else {this.pizzaservice.postPizza(data_pizza_form).subscribe(data => {
            this.router.navigate(['/register/']);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Pizza has been created successfully!',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000
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
                console.log(data);
                this.pizzaForm.setValue({
                    name: data.name,
                    size: data.size,
                    adition: data.adition,
                    price: data.price
                })
            }, error => {
                console.log(error);
            })
        }
    }
}
