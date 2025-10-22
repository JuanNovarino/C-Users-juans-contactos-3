import { Component, input, inject } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContatcsService } from '../../services/contatcs-service';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

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
  contacto: Contact | undefined;

  /*async toggleFavorite(){
    if(this.contacto){
      const res = await this.contactservice.setFavourite(this.contacto.id);
      if(res) this.contacto.isFavorite = !this.contacto.isFavorite;
    }
  }*/

   openDeleteModal(){
    
    Swal.fire({
      title: "¿Desea borrar el contacto?",
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: "Cancelar",
      denyButtonText: `Eliminar definitivamente`
    }).then((result) => {
      if (result.isDenied) { //Reviso que haya clickeado en el botón rojo.
        this.contactservice.deleteContact(this.contact().id);
      }
    });
  }
  
}
