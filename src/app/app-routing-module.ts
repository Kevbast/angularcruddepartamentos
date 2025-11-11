import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { CreateDepartamentosComponent } from './components/create-departamentos.component/create-departamentos.component';
import { DetailsDepartamentosComponent } from './components/details-departamentos.component/details-departamentos.component';

const routes: Routes = [//NO USAMOS / AL PRINCIPIO
  {path:"",component:DepartamentosComponent},
  {path:"newdept",component:CreateDepartamentosComponent},
  {path:"details/:numero/:nombre/:localidad",component:DetailsDepartamentosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
