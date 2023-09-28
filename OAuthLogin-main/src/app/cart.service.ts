import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from './CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http: HttpClient) {}

  addToCart(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token') 
    });
  return this._http.post(`http://localhost:8080/cycle/addToCart/${id}`,{},{headers: headers});
    
  }

  getCart(): Observable<CartItem[]> { 
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token') 
    });
    return this._http.get<CartItem[]>("http://localhost:8080/cycle/showCart",{headers:headers});
  }


  checkout(): Observable<CartItem[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token') 
    });
    return this._http.post<CartItem[]>('http://localhost:8080/cycle/checkout',{},{headers:headers});
  }

}
