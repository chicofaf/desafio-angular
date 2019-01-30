import { Component , ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../_services/index';

@Component({
    selector: 'formulario-cadastro',
    templateUrl: './formulario-cadastro.component.html',
})
export class FormularioCadastroComponent {
    @ViewChild('proposta') formValues;
    constructor(private http: HttpClient, private alertService: AlertService) {
    }
    salvar = (proposta) => {
        this.http.post('/api/backend/proposta/create', {proposta: proposta.value}).subscribe(
            res => {
                this.alertService.success("Proposta cadastrada com sucesso");
                this.formValues.resetForm();
            },
            err => {
                console.log("Error occured");
            }
        );
    }
}

