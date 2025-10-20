import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-service';
//import { Spinner } from "../../components/spinner/spinner";

@Component({
  selector: 'app-andaporfavor',
  imports: [RouterModule, FormsModule,], //   spinner
  templateUrl: './andaporfavor.html',
  styleUrl: './andaporfavor.scss'
})
export class Andaporfavor {

  errorLogin = false;
  AuthService = inject(AuthService);
  isLoading = false;

  async login(form:any){
    console.log(form.value)
    this.errorLogin = false;
    if(!form.value.email || !form.value.password){
      this.errorLogin = true;
      return
  }
    this.isLoading = true;
    await this.AuthService.login(form.value);
    this.isLoading = false;
    this.errorLogin = true;
  }

}
