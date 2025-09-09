import { Component, inject, input } from '@angular/core';
import { Contactos } from '../contactos/contactos';


@Component({
  selector: 'app-registro',
  imports: [],
  templateUrl: './registro.html',
  styleUrl: './registro.scss'
})
export class Registro {
  contacto = input.required<Contactos>()
  

}
