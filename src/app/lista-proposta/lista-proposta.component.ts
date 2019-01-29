import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-proposta',
  templateUrl: './lista-proposta.component.html',
  styleUrls: ['./lista-proposta.component.css']
})
export class ListaPropostaComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  resultado_pesquisa;
  
  ngOnInit() {
    
  }

  pesquisarPorCpf = (pesquisa) => {
    this.http.get(`/api/backend/proposta/cpf?cpf=${pesquisa.value.cpf}`).subscribe(data => {
      if(data && data[0]) this.resultado_pesquisa = data[0].proposta;
    });
  }


}
