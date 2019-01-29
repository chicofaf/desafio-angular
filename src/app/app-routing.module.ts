import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';

const routes: Routes = [{path:'formulario', component: FormularioCadastroComponent}];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
