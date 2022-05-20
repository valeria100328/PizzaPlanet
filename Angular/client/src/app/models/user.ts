export class User{
    _id?: any;
    name: string;
    email: string;
    password: string;

    constructor(nombreUsuario: string,correoUsuario: string, passUsuario: string){
        this.name = nombreUsuario
        this.email = correoUsuario;
        this.password = passUsuario;
    }
}
