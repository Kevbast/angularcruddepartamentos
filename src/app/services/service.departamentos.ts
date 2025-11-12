import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
//importamos modelos
import { Departamento } from "../models/departamento";

@Injectable()
export class ServiceDepartamento{
    constructor(private _http:HttpClient){}

    getDepartamentos():Observable<Array<Departamento>>{
        let request="api/departamentos";
        let apiUrl=environment.apiDepartamentos + request;
        return this._http.get<Array<Departamento>>(apiUrl);
    }
    //PASAMOS AL INSERT NEESITAMOS HEADERS
    createDepartamento(departamento:Departamento):Observable<any>{//no devuelve nada así q ponemos any
        let json = JSON.stringify(departamento);//lo convertimos en json,como en react
        //CREAMOS LA CABECERA DE LA PETICION
        let header = new HttpHeaders();
        //INDICAMOS EL TIPO DE OBJETO A ENVIAR EN DATA
        header = header.set("Content-type","application/json");
        let request="api/departamentos";
        let apiUrl=environment.apiDepartamentos + request;

        return this._http.post(apiUrl,json,{headers:header});
    }

    findDepartamento(id:number):Observable<Departamento>{//DEVOLVEMOS DEPARTAMENTO!
        let request="api/departamentos/"+id;
        let apiUrl=environment.apiDepartamentos + request;
        return this._http.get<Departamento>(apiUrl);
    }

    //ACTUALIZAMOS EL DEPARTAMENTO 
    updateDepartamento(departamento:Departamento):Observable<any>{//no devuelve nada así q ponemos any
        let json = JSON.stringify(departamento);//lo convertimos en json,como en react
        //CREAMOS LA CABECERA DE LA PETICION
        let header = new HttpHeaders().set("Content-type","application/json");
        let request="api/departamentos";
        let apiUrl=environment.apiDepartamentos + request;

        return this._http.put(apiUrl,json,{headers:header});
    }

    //IMPLEMENTACIÓN DE DELETE DENTRO DE DEPARTAMENTOS
    deleteDepartamento(id:number):Observable<Array<Departamento>>{
        let request="api/departamentos/"+id;
        let apiUrl=environment.apiDepartamentos + request;
        return this._http.delete<Array<Departamento>>(apiUrl);
    }




}