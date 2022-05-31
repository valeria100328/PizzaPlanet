import { Injectable } from '@angular/core';
//Se importan esatas librerias
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Pizza } from '../models/pizza';

@Injectable({
    providedIn: 'root'
})
export class PizzaService {

    url_api ='http://127.0.0.1:3000/api/pizza';

    constructor(private  http: HttpClient) { }

    //Se crea el metodo y get y va a obtener una respuesta mediante el observable
    getPizzas(): Observable<any> {
        //Ya teniamos la api hecha
        return this.http.get(this.url_api);
    }

    postPizza(pizza: Pizza): Observable<any> {
        return this.http.post(this.url_api, pizza);
    }

    getPizza(id: string): Observable<any> {
        return this.http.get(`${this.url_api}/${id}`)
    }

    putPizza(id: String, pizza: Pizza ): Observable<any> {
        return this.http.put(`${this.url_api}/${id}`, pizza)
    }

    deletePizza(id: string): Observable<any> {
        return this.http.delete(`${this.url_api}/${id}`)
    }
}
