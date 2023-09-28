import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-authbt',
  template: '<button (click)="auth.loginWithRedirect()">Log in</button>'
})
export class AuthbtComponent {

  constructor(public auth: AuthService) {}
}
