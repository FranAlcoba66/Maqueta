import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-modales',
  templateUrl: './modales.component.html',
  styleUrls: ['./modales.component.css']
})
export class ModalesComponent implements OnInit {

  public educacion: Educacion =new Educacion();
 

  constructor(public EducacionService: EducacionService) { }

  ngOnInit() {
    this.Editar();
  }
  refresh(): void {
    window.location.reload();
}
  Editar(){
    let id=localStorage.getItem("id");
    this.EducacionService.getEducacionId(+id)
    .subscribe(data=>{
      this.educacion=data;
     
    })

  }

  Actualizar(educacion:Educacion){
    this.EducacionService.updateEducacion(educacion)
    .subscribe(data=>{
      this.educacion=data;
      alert("Se Actualizo con Exito...!!!");
      this.refresh();
        // this.router.navigate(['editar']);
    
    })
  }


  
}
