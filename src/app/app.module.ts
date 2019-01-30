import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaPropostaComponent } from './lista-proposta/lista-proposta.component';

import { AlertComponent } from './_directives/index';
import { AlertService } from './_services/index';


@NgModule({
  declarations: [
    AppComponent,
    FormularioCadastroComponent,
    ListaPropostaComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }

