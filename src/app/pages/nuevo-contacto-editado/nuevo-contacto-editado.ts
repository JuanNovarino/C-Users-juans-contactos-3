import { Component, ElementRef, inject, input, OnInit, viewChild } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { Contact, NewContact } from '../../interfaces/contact';
import { ContatcsService } from '../../services/contatcs-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector:  'app-nuevo-contacto-editado',
  imports: [FormsModule],
  templateUrl: './nuevo-contacto-editado.html',
  styleUrl: './nuevo-contacto-editado.scss'
})
export class NuevoContactoEditado implements OnInit {
  contactsService = inject(ContatcsService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  errorEnBack = false;
  idContacto: string | null = null;
  contactoOriginal: Contact | undefined = undefined;
  form = viewChild<NgForm>('newContactForm');

  isSubmitting = false;

  
  async ngOnInit() {
    // Obtener el ID del contacto desde los parámetros de la ruta
    this.idContacto = this.route.snapshot.paramMap.get('idContacto');
    
    if(this.idContacto){
      this.contactoOriginal = await this.contactsService.getContactById(this.idContacto);
      
        this.form()?.setValue({
          firstName: this.contactoOriginal?.firstName,
          lastName: this.contactoOriginal?.lastName,
          address: this.contactoOriginal?.address,
          email: this.contactoOriginal?.email,
          image: this.contactoOriginal?.image,
          number: this.contactoOriginal?.number,
          company: this.contactoOriginal?.company,
          isFavourite: this.contactoOriginal?.isFavorite
        });
    
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
      isFavorite: form.value.isFavourite,
    }
    
    let res;
    
    this.router.navigate(["/contacts"]);
    
    if(this.idContacto){
      res = await this.contactsService.editContact({...nuevoContacto,id:this.idContacto});
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