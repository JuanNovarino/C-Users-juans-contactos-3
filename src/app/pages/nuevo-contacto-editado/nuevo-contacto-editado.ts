import { Component, ElementRef, inject,input, OnInit, viewChild } from '@angular/core';
import { Form,FormGroup,FormsModule,NgControl,NgForm,NgModel } from '@angular/forms';
import { Contact, NewContact } from '../../interfaces/contact';
import { ContatcsService } from '../../services/contatcs-service';
import { Router } from '@angular/router';
//import { Spinner } from '../../components/spinner/spinner';
@Component({
  selector: 'app-nuevo-contacto-editado',
  imports: [FormsModule], //Spinner
  templateUrl: './nuevo-contacto-editado.html',
  styleUrl: './nuevo-contacto-editado.scss'
})
export class NuevoContactoEditado implements OnInit {

  contactsService = inject(ContatcsService);
   router = inject(Router)
    errorEnBack = false;
   idContacto = input<string>(); //cambie tipo de dato number por tipo de dato string
    contactoOriginal:Contact|undefined = undefined;
   form = viewChild<NgForm>('newContactForm');
   isLoading = false;

   private cleanValue(value: any): any {
    if (typeof value === 'string' && value.trim() === '') {
      return null;
    }
    return value;
  }
  
  async ngOnInit() {
    if(this.idContacto()){
      this.contactoOriginal = await this.contactsService.getContactById(this.idContacto()!);
      // Cambio los valores del formulario
      this.form()?.setValue({
        name: this.contactoOriginal!.name,
        lastname: this.contactoOriginal!.lastname,
        address: this.contactoOriginal!.address,
        email: this.contactoOriginal!.email,
        imageurl: this.contactoOriginal!.imageurl,
        number: this.contactoOriginal!.number,
        company: this.contactoOriginal!.company,
        isFavourite: this.contactoOriginal!.isFavourite
      })
    }
  }

  /** Revisa si estamos editando o creando un contacto y ejecuta la función correspondiente del servicio de contactos */
  async handleFormSubmission(form:NgForm){
    this.errorEnBack = false;
    const nuevoContacto: NewContact ={
      name: form.value.name,
      lastname:this.cleanValue(form.value.lastname), //quede por corregir aca
      address: this.cleanValue(form.value.address),
      email: this.cleanValue(form.value.email),
      imageurl: this.cleanValue(form.value.imageurl),
      number: form.value.number,
      company: this.cleanValue(form.value.company),
      isFavourite: !!form.value.isFavourite 
    }

    console.log("--- Objeto Nuevo Contacto Enviado ---");
    console.log(nuevoContacto); // <-- Imprime el objeto completo

    let res;
    // const res = await this.contactsService.createContact(nuevoContacto);

    this.isLoading = true;
    if(this.idContacto()){
      res = await this.contactsService.editContact({...nuevoContacto,id:this.idContacto()!})
    } else {
      res = await this.contactsService.createContact(nuevoContacto);
    }
    this.isLoading = false;

    if(!res) {
      this.errorEnBack = true;
      return
    };
    this.router.navigate(["/contacts",res.id]);
  }

}
