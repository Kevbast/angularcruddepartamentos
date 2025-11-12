import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamento } from '../../services/service.departamentos';

@Component({
  selector: 'app-departamentos-component',
  standalone: false,
  templateUrl: './departamentos-component.html',
  styleUrl: './departamentos-component.css',
})
export class DepartamentosComponent implements OnInit {
public departamentos!:Array<Departamento>;


constructor(private _service:ServiceDepartamento){}
 ngOnInit(): void {
   this._service.getDepartamentos().subscribe(response=>{
    this.departamentos=response;
   })
 }

 //MÉTODO DELETE IMPLEMENTADO DENTRO DE DEPARTAMENTOS;
 deleteDept(numero:number):void{
  this._service.deleteDepartamento(numero).subscribe(response=>{
      console.log("Departamento "+ numero+ " Eliminado!!");
      this._service.getDepartamentos().subscribe(response=>{//recargamos la página
        this.departamentos=response;
      })
  })
 }

}
