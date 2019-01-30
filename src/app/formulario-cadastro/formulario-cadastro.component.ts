import { Component , ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'formulario-cadastro',
    templateUrl: './formulario-cadastro.component.html',
})
export class FormularioCadastroComponent {
    @ViewChild('proposta') formValues;
    constructor(private http: HttpClient) {
    }
    salvar = (proposta) => {
        this.http.post('/api/backend/proposta/create', {proposta: proposta.value}).subscribe(
            res => {
                this.formValues.resetForm();
            },
            err => {
                console.log("Error occured");
            }
        );
    }
}

