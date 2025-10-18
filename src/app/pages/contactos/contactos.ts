import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaDeContactos } from '../../component/lista-de-contactos/lista-de-contactos'; 
import { Contact, NewContact } from '../../interfaces/contact';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';
import { ContatcsService } from '../../services/contatcs-service';

@Component({
  selector: 'app-contactos',
  imports: [RouterModule,ListaDeContactos,FormsModule],
  templateUrl: './contactos.html',
  styleUrl: './contactos.scss'
})
export class Contactos implements OnInit {

  ngOnInit(): void {
  this.contactsService.getContacts();
  }

  authService = inject(AuthService);
  contactsService = inject(ContatcsService);
  }
     





