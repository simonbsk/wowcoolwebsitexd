import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'wowverycoolwebsitexd';

  constructor(private router: Router) { }

  redirectToHome() {
    this.router.navigate(["/home"])
  }

  redirectToTables() {
    this.router.navigate(["/tables"])
  }
}
