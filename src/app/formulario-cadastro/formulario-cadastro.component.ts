import { Component } from '@angular/core';

@Component({ 
    selector: 'formulario-cadastro',
    templateUrl: './formulario-cadastro.component.html',
})
export class FormularioCadastroComponent {
    proposta = {nome: "asasdasd"}
    salvar = () => {
        console.log("enviar cadastro de proposta");
    }
}