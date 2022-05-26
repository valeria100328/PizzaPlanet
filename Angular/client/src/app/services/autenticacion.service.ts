import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AutenticacionService {
    //regfistramos el usuario
    private signUpURL = 'http://localhost:3000/api/user';
    private loginURL = 'http://localhost:3000/api/autenticacion';
    //Inyectamos en el constructor
    constructor(private http: HttpClient) {}
    singnUpUser(user: any) {
        //Cualquier objetos nos puede devolver y lanzamos la peticion devolver un observable
        return this.http.post<any>(this.signUpURL, user);
    }
    loginUser(user: any) {
        return this.http.post<any>(this.loginURL, user);
    }

    isLogged() {
        return !!localStorage.getItem('token');
    }
}
