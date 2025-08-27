import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-logged',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './logged.html',
  styleUrl: './logged.scss'
})
export class Logged {

}
