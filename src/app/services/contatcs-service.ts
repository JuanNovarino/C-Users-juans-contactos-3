import { inject, Injectable } from '@angular/core';
import { Contact, NewContact } from '../interfaces/contact';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root'
})
export class ContatcsService {

  aleatorio = Math.random();
  authService = inject(AuthService);
  readonly URL_BASE = "https://agenda-api.somee.com/api/contacts";

  contacto: Contact[] = []

   /** Obtiene los contactos del backend */
  async getContacts() {
    const res = await fetch(this.URL_BASE,
      {
        headers:{
          Authorization: "Bearer "+this.authService.token,
        }
      }
    )
    const resJson: Contact[] = await res.json()
    this.contacto = resJson;
  }

  /** Devuelve un contato en particular segun su ID */
  async getContactById(id: string | number) {
    const res = await fetch(this.URL_BASE+"/"+id, 
      {
        headers: {
          Authorization: "Bearer "+this.authService.token,
        },
      });

    if(!res.ok) return;
    const resContact:Contact = await res.json();
    return resContact;
  }
  
  /** Crea un contacto */
  async createContact(nuevoContacto:NewContact) {
    //Diagnostico del token
    console.log("--- TOKEN USADO EN POST ---");
    console.log(this.authService.token);
    console.log("---------------------------");

    const res = await fetch(this.URL_BASE, 
      {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer "+this.authService.token,
        },
        body: JSON.stringify(nuevoContacto)
      });
      
    if(!res.ok) return;
    const resContact:Contact = await res.json();
    this.contacto.push(resContact);
    return resContact;
  }

  /** Edita un contacto */
  async editContact(contactoEditado:Contact) {
    const res = await fetch(this.URL_BASE+"/"+contactoEditado.id, 
      {
        method:"PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer "+this.authService.token,
        },
        body: JSON.stringify(contactoEditado)
      });
    if(!res.ok) return;
    /** Edita la lista actual de contactos reemplazando sólamente el que editamos */
    this.contacto = this.contacto.map(contact => { //se pone contact pq estoy declarando una variable temporal que np esta relacionada con mi "contacto"
      if(contact.id === contactoEditado.id) {
        return contactoEditado;
      };
      return contact;
    });
    return contactoEditado;
  }

  /** Borra un contacto */
  async deleteContact(id:string | number) {
    const res = await fetch(this.URL_BASE+"/"+id, 
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer "+this.authService.token,
        },
      });
    if(!res.ok) return;
    this.contacto = this.contacto.filter(contact => contact.id !== id);
    return true;
  }

  /** Marca/desmarca un contacto como favorito */
  async setFavourite(id:string | number ) {
    const res = await fetch(this.URL_BASE+"/"+id+"/favorite", 
      {
        method: "POST",
        headers: {
          Authorization: "Bearer "+this.authService.token,
        },
      });
    if(!res.ok) return;
    /** Edita la lista actual de contactos reemplazando sólamente el favorito del que editamos */
    this.contacto = this.contacto.map(contact => {
      if(contact.id === id) {
        return {...contact, isFavorite: !contact.isFavourite};
      };
      return contact;
    });
    return true;
  }
}