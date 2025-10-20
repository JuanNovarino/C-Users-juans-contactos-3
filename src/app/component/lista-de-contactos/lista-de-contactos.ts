import { Component, input, inject } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContatcsService } from '../../services/contatcs-service';
import { RouterModule } from '@angular/router';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-de-contactos',
  imports: [RouterModule],
  templateUrl: './lista-de-contactos.html',
  styleUrl: './lista-de-contactos.scss'
})
export class ListaDeContactos {

  contactservice = inject(ContatcsService)
  contact = input.required<Contact>()
  aleatorio = Math.random();
  
}
