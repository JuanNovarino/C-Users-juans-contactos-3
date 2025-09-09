import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContatcsService {

  aleatorio = Math.random()

  contacto: Contact[] = [
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

  getContacts(){
    
  }
  getContactById(){

  }
  createContact(name : string, lastname : string, address : string, email: string, number: string, company: string ){

    const newcontacto:Contact =
    {
      id: "1",
      name:name,
      lastname:lastname,
      address:address,
      email:email,
      number:number,
      company:company,
      
    }
    //export interface nuevoContacto Omit<Contact,"id">
    this.contacto.push(newcontacto)
  }
  editcontact(){}
  deleteContact(id:string){

    this.contacto =this.contacto.filter(contacto => contacto.id !== id)
    
  }
  setfavourite(){}
  
}
