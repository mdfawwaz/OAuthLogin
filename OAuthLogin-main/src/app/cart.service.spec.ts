import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

 

// Define the Credentials interface

interface Credentials {

  username: string;

  password: string;

}

 

@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

export class LoginComponent {

  credentials: Credentials = { username: '', password: '' }; // Initialize with empty values

 

  constructor(private authService: AuthService) {}

 

  login(): void {

    this.authService.login(this.credentials).subscribe(

      (response) => {

        localStorage.setItem('token', response.token);

        console.log('Login successful');

        // Handle successful login, e.g., redirect to user dashboard

      },

      (error) => {

        console.error('Login failed', error);

        // Handle login error

      }

    );

  }

}