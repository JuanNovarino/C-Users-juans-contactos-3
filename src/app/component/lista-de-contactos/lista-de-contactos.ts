import { Component, input } from '@angular/core';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-lista-de-contactos',
  imports: [],
  templateUrl: './lista-de-contactos.html',
  styleUrl: './lista-de-contactos.scss'
})
export class ListaDeContactos {
  
  contact = input.required<Contact>()
}
