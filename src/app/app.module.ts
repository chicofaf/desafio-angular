import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaPropostaComponent } from './lista-proposta/lista-proposta.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioCadastroComponent,
    ListaPropostaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

