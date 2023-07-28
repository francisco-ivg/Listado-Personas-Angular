import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./LoggingService.service";
import { Persona } from "./persona.model";
@Injectable()
export class PersonasService{
    personas:Persona[]=[new Persona('Juan','Perez'),
    new Persona('Laura','Juarez')];
    
    saludar=new EventEmitter<number>();
    constructor(private loggingService:LogginService){}
     
    agregarPersonaS(persona:Persona){
       this.loggingService.enviaMensajeAConsola("Agregar persona:" + persona.nombre) 
       this.personas.push(persona)
      }
}
