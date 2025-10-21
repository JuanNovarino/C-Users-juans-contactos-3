import { Component, ElementRef, inject, input, OnInit, viewChild } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { Contact, NewContact } from '../../interfaces/contact';
import { ContatcsService } from '../../services/contatcs-service';
import { Router } from '@angular/router';

@Component({
  selector:  'app-nuevo-contacto-editado',
  imports: [FormsModule],
  templateUrl: './nuevo-contacto-editado.html',
  styleUrl: './nuevo-contacto-editado.scss'
})
export class NuevoContactoEditado implements OnInit {
  contactsService = inject(ContatcsService);
  router = inject(Router)
  errorEnBack = false;
  idContacto = input<number>();
  contactoOriginal:Contact|undefined = undefined;
  form = viewChild<NgForm>('newContactForm');

  
  async ngOnInit() {
    if(this.idContacto()){
      this.contactoOriginal = await this.contactsService.getContactById(this.idContacto()!);
      this.form()?.setValue({
        firstName: this.contactoOriginal?.firstName,
        lastName: this.contactoOriginal?.lastName,
        address: this.contactoOriginal?.address,
        email: this.contactoOriginal?.email,
        image: this.contactoOriginal?.image,
        number: this.contactoOriginal?.number,
        company: this.contactoOriginal?.company,
        isFavourite: this.contactoOriginal?.isFavourite
      })
    }
  }

async handleFormSubmission(form:NgForm){
  this.errorEnBack = false;
    const nuevoContacto: NewContact ={
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      address: form.value.address,
      email: form.value.email,
      image: form.value.image,
      number: form.value.number,
      company: form.value.company,
      isFavourite: form.value.isFavourite
    }
    
    let res;
    
    this.router.navigate(["/contacts"]);
    
    if(this.idContacto()){
      res = await this.contactsService.editContact({...nuevoContacto,id:this.idContacto()!.toString()});
    } else {
      res = await this.contactsService.createContact(nuevoContacto);
    }

  
  if(!res) {
      this.errorEnBack = true;
      return
    };
  }
  async createContact(form:NgForm){
    
  }
}