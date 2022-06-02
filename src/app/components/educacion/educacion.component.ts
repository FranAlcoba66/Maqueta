import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

 
  public educacion: Educacion[];




  constructor(public EducacionService: EducacionService) { }

  ngOnInit() {
    this.getEducacion();
   
  }

  public getEducacion(): void {
    this.EducacionService.getEducacion().subscribe(data => (this.educacion = data))
  }

  public GuardarEducacion(educacion: Educacion) {
    this.EducacionService.addEducacion(educacion)
      .subscribe(data => {
        alert("Educacion agregada exitosamente !!!");
       
      }
      )
  }


  public EliminarEducacion(educacionid: any) {
    this.EducacionService.deleteEducacion(educacionid).subscribe(data => {
      this.educacion = this.educacion.filter(p => p !== educacionid);
      alert("Educacion eliminada...");
    })
  }

  Editar(educacion:Educacion){
    localStorage.setItem("id",educacion.id.toString());
    
  }


 
}
