import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaDeContactos } from '../../component/lista-de-contactos/lista-de-contactos';
import { FormsModule } from '@angular/forms';
import { ContatcsService } from '../../services/contatcs-service';

@Component({
  selector: 'app-contactos',
  imports: [RouterModule,ListaDeContactos,FormsModule],
  templateUrl: './contactos.html',
  styleUrl: './contactos.scss'
})
export class Contactos {

  contactsservice = inject(ContatcsService)

  createContact(form:any){
    let name=form.name
    let lastname=form.lastname
    let address=form.address
    let email=form.email
    let number=form.number
    let company=form.company
    this.contactsservice.createContact(name,lastname,address,email,number,company)
  }
     
  }
  






