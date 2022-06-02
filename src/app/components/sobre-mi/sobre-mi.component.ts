import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { persona } from '../model/persona.model';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  persona:persona = new persona ("","","","","");

  constructor(public PersonaService:PersonaService) { }

  ngOnInit(): void {
    this.PersonaService.getPersona().subscribe(data=>{this.persona=data})
  }

  // editarPersona(persona):{
   
  // }

  

}
