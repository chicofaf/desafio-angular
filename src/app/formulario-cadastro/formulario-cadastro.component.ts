import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'formulario-cadastro',
    templateUrl: './formulario-cadastro.component.html',
})
export class FormularioCadastroComponent {
    constructor(private http: HttpClient) {
    }
    salvar = (proposta) => {
        console.log(proposta);
        //this.http.get('http://localhost:8080/backend/proposta').subscribe(data => {
           // console.log(data);
        //});

        this.http.post('/api/backend/proposta/create', {proposta: proposta.value}).subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log("Error occured");
            }
        );
    }
}

