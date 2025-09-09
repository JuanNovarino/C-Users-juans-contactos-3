import { Component, input, inject } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContatcsService } from '../../services/contatcs-service';

@Component({
  selector: 'app-lista-de-contactos',
  imports: [],
  templateUrl: './lista-de-contactos.html',
  styleUrl: './lista-de-contactos.scss'
})
export class ListaDeContactos {
  
  contact = input.required<Contact>()
  contactservice = inject(ContatcsService)
}
