import { HttpClient } from "@angular/common/http";
import { Educacion } from "../components/model/educacion.model";

import { Injectable } from "@angular/core";



@Injectable({
  providedIn: 'root'
})

export class EducacionService {

  URL = 'http://localhost:8080/educacion/';

  // private _refresh$= new Subject<void>();
  
  constructor(private http: HttpClient) { }

  // get refresh$(){
  //   return this._refresh$;
  // }

  public getEducacion() {
    return this.http.get<Educacion[]>(this.URL + 'traer');
  }
  public getEducacionId(id: any) {
    return this.http.get<Educacion>(this.URL + 'traer/' + id);
  }
  public addEducacion(educacion: Educacion) {
    return this.http.post<Educacion>(this.URL + 'crear', educacion);
    // .pipe(
    //   tap(()=>{
    //     this._refresh$.next();
    //   })
    // )
  }

  public deleteEducacion(id: any) {
    return this.http.delete<Educacion>(this.URL + 'borrar/' + id);
  }

  public updateEducacion(educacion: Educacion) {
    return this.http.put<Educacion>(this.URL + 'editar/'+ educacion.id,educacion)
    // .pipe(
    //   tap(()=>{
    //     this._refresh$.next();
    //   })
    // )
  }



}
