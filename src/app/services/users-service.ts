import { Injectable } from '@angular/core';
import { NewUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /** Registar el usuario en el back */
  async registro(registerData:NewUser){
    return await fetch("https://w370351.ferozo.com/api", 
      {
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(registerData)
      });
  }
  
}
