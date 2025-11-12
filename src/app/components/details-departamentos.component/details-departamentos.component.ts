import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-details-departamentos.component',
  standalone: false,
  templateUrl: './details-departamentos.component.html',
  styleUrl: './details-departamentos.component.css',
})
export class DetailsDepartamentosComponent implements OnInit {
 public numrecibido!:number;
 public nombrerecibido!:string;
 public localidadrecibida!:string;

  constructor(private _activeRoute:ActivatedRoute){}
  ngOnInit(): void {
     this._activeRoute.params.subscribe((parametros:Params)=>{
      //DENTRO DE PARAMS es donde recibimos los parámetros por su :name
        this.numrecibido=parseInt(parametros['numero']);
        this.nombrerecibido=parametros['nombre'];
        this.localidadrecibida=parametros['localidad'];
        console.log(this.numrecibido);
        console.log(this.nombrerecibido);
        console.log(this.localidadrecibida)
      })    
  }
}
