import { Component, inject } from '@angular/core';
import { RouterLink,Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-logged',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './logged.html',
  styleUrl: './logged.scss'
})
export class Logged {
authService = inject(AuthService);
}
