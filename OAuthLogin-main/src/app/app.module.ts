import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CycleShopComponent } from './cycle-shop/cycle-shop.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
//import { AuthService } from '@auth0/auth0-angular';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthbtComponent } from './authbt/authbt.component';
@NgModule({
  declarations: [
    AppComponent,
    CycleShopComponent,
    CartComponent,
    LoginComponent,
    LogoutComponent,
    AuthbtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-qgfqd8ryvo1gzwqu.us.auth0.com',
      clientId: 'eb1ds14qbvegGaF6QRTt3TYCsbiOmtU4',
      authorizationParams: {
        redirect_uri: window.location.origin + "/cycleStore"
      }
    }),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
