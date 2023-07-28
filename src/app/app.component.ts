import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LogginService } from './LoggingService.service';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[LogginService] //servicio
})
export class AppComponent implements OnInit{
  title = 'Listado de personas';
  personas:Persona[]=[];
  //personas:Persona[]=[new Persona('Juan','Perez'),new Persona('Laura','Juarez')];
 
  constructor(private loggingService:LogginService,private personasService:PersonasService){} //servicio
  
  ngOnInit(): void {
    this.personas= this.personasService.personas;
  }

  //personaAgregada(persona:Persona){
  //  this.personas.push(persona)
  //    this.personasService.agregarPersonaS(persona);
  //}

}
