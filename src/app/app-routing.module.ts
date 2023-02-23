import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaComponent } from './components/lista/lista.component';
import { ControlversionComponent } from './components/controlversion/controlversion.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'integrantes', component: ListaComponent},
  {path:'controlversion', component: ControlversionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
