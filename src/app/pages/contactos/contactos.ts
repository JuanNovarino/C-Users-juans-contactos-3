import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaDeContactos } from '../../component/lista-de-contactos/lista-de-contactos';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-contactos',
  imports: [RouterModule,ListaDeContactos],
  templateUrl: './contactos.html',
  styleUrl: './contactos.scss'
})
export class Contactos {

  contacts: Contact [] = [

    {
      id : "1",
      name : "Juan",
      lastname : "Novarino",
      address : "Laprida 5477",
      email: "juasnovarino2005@gmail.com",
      number: "+543416997685",
      company: "austral",
    },

    {
        id : "2",
        name : "Agustin",
        lastname : "Ricci",
        address : "San Martin 5477",
        email: "agusricci2008@gmail.com",
        number: "+543416887963",
        company: "San Jose",
    }


  ]

  



}
