import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    loginUser: any;
    loginForm: FormGroup;
    validacionEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private autenticacion: AutenticacionService
    ) {
        this.loginUser = {};
        this.loginForm = this.fb.group({
            usuario: [
                '',
                [Validators.required, Validators.pattern(this.validacionEmail)],
            ],
            password: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        console.log('esta instruccion se ejecuta al cargar el componente');
    }
    //Proceso de subscripcion
    login() {
        this.autenticacion.loginUser(this.loginUser).subscribe(
            (res) => {
                console.log(res);
                //Si tod esta correcto se nos va a guardar el localstorage
                localStorage.setItem('token', res.jwtToken);
            },
            (err) => console.log(err)
        );
    }

    accesoUsuario() {
        console.log(this.loginForm);
        console.log(this.loginForm.get('usuario')?.value);

        const data_usuario: User = {
            email: this.loginForm.get('usuario')?.value,
            password: this.loginForm.get('password')?.value,
            name: '',
        };

        this.router.navigate(['/']);

        Swal.fire({
            title: '¡Acceso permitido, Bienvenido a PIZZA PLANET!!',
            text: '',
            imageUrl:
                'http://enteratecali.net/wp-content/uploads/2014/03/Pizza-planet.png',
            icon: 'success',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        });
        console.log(data_usuario);
    }
}
