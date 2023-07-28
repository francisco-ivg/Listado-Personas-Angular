import { Component,ElementRef,EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers:[LogginService] //servicio
})
export class FormularioComponent {

  // @Output() personaCreada = new EventEmitter<Persona>(); //creacion de evento que se encarga de propagar el objeto de tipo persona
  nombreInput:string='';
  apellidoInput:string='';
 
 //@ViewChild('nombreInput1') nombreI:ElementRef;
 //@ViewChild('apellidoInput') apellidoI:ElementRef;

 constructor(private loggingService:LogginService,
  private personasService:PersonasService){
    this.personasService.saludar.subscribe(
      (indice:number) => alert("El indice es: "+ indice));} //servicio

 agregarPersona(){ //referencias locales reemplazo de two way binding
  let persona1 = new Persona(this.nombreInput,this.apellidoInput);
  //let persona1 = new Persona(this.nombreI.nativeElement.value,this.apellidoI.nativeElement.value); //viewchild
  //this.loggingService.enviaMensajeAConsola("Enviamos persona " + persona1.nombre + " con apellido " + persona1.apellido) //servicio
  //this.personaCreada.emit(persona1)
  this.personasService.agregarPersonaS(persona1)
}
  
 //agregarPersona(nombreInput:HTMLInputElement,apellidoInput:HTMLInputElement){ //referencias locales reemplazo de two way binding
  //let persona1 = new Persona(nombreInput.value,apellidoInput.value);
  
  //this.personaCreada.emit(persona1)
//}
 
 //agregarPersona(){
  //  let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    //this.personas.push(persona1);
  //  this.personaCreada.emit(persona1)
  //}
}
