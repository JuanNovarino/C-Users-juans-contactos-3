import { Component, inject} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../../services/users-service';
//import { Spinner } from '../../components/spinner/spinner';


@Component({
  selector: 'app-registro', //revisar
  imports: [RouterModule,FormsModule,],//spinner
  templateUrl: './registro.html',
  styleUrl: './registro.scss'
})
export class Registro {
  errorRegister = false;
  usersService = inject(UsersService);
  isLoading = false;
  router = inject(Router);

  async registro(form: NgForm){
    this.errorRegister = false; //Elimino el mensaje de error
    // Hago validación extra sobre el formulario
    if(!form.value.email || 
      !form.value.password || 
      !form.value.password2 || 
      !form.value.firstName ||
      !form.value.lastName ||
      form.value.password !== form.value.password2){
      this.errorRegister = true;
      return
    }
        this.isLoading = true;
        const res = await this.usersService.registro(form.value);
        if(res.ok){
          this.router.navigate(["/andaporfavor"])
        }
        this.isLoading = false;
        this.errorRegister = true;

} 
}





