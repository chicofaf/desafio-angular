import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import {ListaPropostaComponent} from './lista-proposta/lista-proposta.component';

const routes: Routes = [{path:'formulario', component: FormularioCadastroComponent}, {path: 'lista', component: ListaPropostaComponent}];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
