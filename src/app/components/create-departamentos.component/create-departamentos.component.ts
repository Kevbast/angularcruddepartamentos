import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamento } from '../../services/service.departamentos';
import { Router } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-create-departamentos',
  standalone: false,
  templateUrl: './create-departamentos.component.html',
  styleUrl: './create-departamentos.component.css',
})
export class CreateDepartamentosComponent {
  @ViewChild("cajanum") cajanum!:ElementRef;
  @ViewChild("cajanombre") cajanombre!:ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad!:ElementRef;
  
  constructor(
    private _service:ServiceDepartamento,
    private _router:Router,
  ){}

  insertarDept():void{
    let numero=parseInt(this.cajanum.nativeElement.value);
    let nombre=this.cajanombre.nativeElement.value;
    let localidad=this.cajalocalidad.nativeElement.value;
    
    let departamento=new Departamento(numero,nombre,localidad);

    console.log("INSERTANDO DEPARTAMENTO: "+departamento);

    this._service.createDepartamento(departamento).subscribe(()=>{
      console.log("DEPARTAMENTOS INSERTADO");
      this._router.navigate(["/"])//nos lleva a home
    })

  }
}
