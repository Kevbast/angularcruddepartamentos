import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamento } from '../../services/service.departamentos';

@Component({
  selector: 'app-update-departamento',
  standalone: false,
  templateUrl: './update-departamento.component.html',
  styleUrl: './update-departamento.component.css',
})
export class UpdateDepartamentoComponent implements OnInit{
public departamento!:Departamento;
public numrecibido!:number;
@ViewChild("cajanum") cajanum!:ElementRef;
@ViewChild("cajanombre") cajanombre!:ElementRef;
@ViewChild("cajalocalidad") cajalocalidad!:ElementRef;

  constructor(private _activeRoute:ActivatedRoute,
    private _service:ServiceDepartamento,
    private _router:Router){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros:Params)=>{
      this.numrecibido=parseInt(parametros['numero']);
      console.log(this.numrecibido+" obtenido!!");
      //SERVICIO PARA ENCONTRAR EL DEPT
      this._service.findDepartamento(this.numrecibido).subscribe(response=>{
        this.departamento=response;
        console.log(this.departamento)
      })
    })
  }

  updateDepartamento():void{
    let numero=parseInt(this.cajanum.nativeElement.value);
    let nombre=this.cajanombre.nativeElement.value;
    let localidad=this.cajalocalidad.nativeElement.value;
        
    let departamentoupdate=new Departamento(numero,nombre,localidad);
    console.log(departamentoupdate);
    //PROCEDEMOS CON EL SERVICIO UPDATE
    this._service.updateDepartamento(departamentoupdate).subscribe(response=>{
      console.log("ACTUALIZADO!!");
      this._router.navigate(["/"]);      
    })
    
  }
}
