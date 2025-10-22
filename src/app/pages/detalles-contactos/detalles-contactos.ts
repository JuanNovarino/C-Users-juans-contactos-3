import { Component, input, inject } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContatcsService } from '../../services/contatcs-service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalles-contactos',
  imports: [RouterModule],
  templateUrl: './detalles-contactos.html',
  styleUrl: './detalles-contactos.scss'
})
export class DetallesContactos {

   idContacto = input.required<string>();
  readonly contactService = inject(ContatcsService);
  contacto: Contact | undefined;
  cargandoContacto = false;
  router = inject(Router);

  async ngOnInit() {
    if(this.idContacto()){
      // Si encuentro el contacto en el array del servicio lo uso, mientras tanto cargo el contacto del backend por si hubo cambios en el contacto
      this.contacto = this.contactService.contacto.find(contacto => contacto.id.toString() === this.idContacto());
      if(!this.contacto) this.cargandoContacto = true;
      const res = await this.contactService.getContactById(this.idContacto());
      if(res) this.contacto = res;
      this.cargandoContacto = false;
    }
  }

  async toggleFavorite(){
    if(this.contacto){
      const res = await this.contactService.setFavourite(this.contacto.id);
      if(res) this.contacto.isFavorite = !this.contacto.isFavorite;
    }
  }

  async deleteContact(){
    if(this.contacto){
      const res = await this.contactService.deleteContact(this.contacto.id);
      if(res) this.router.navigate(['/']);
    }
  }
}


