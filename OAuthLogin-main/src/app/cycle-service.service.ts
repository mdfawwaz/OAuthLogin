import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cycle } from './Cycle';

@Injectable({
  providedIn: 'root'
})
export class CycleServiceService {

  constructor(private _http:HttpClient) { }

  getAllCycles(): Observable<Cycle[]>{
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token') 
    });
    return this._http.get<Cycle[]>("http://localhost:8080/cycle/cycles",{headers:headers});
  }

  borrowCycle(id : number): Observable<Cycle[]>{
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token') 
    });
    return this._http.get<Cycle[]>(`http://localhost:8080/cycle/borrow/${id}`,{headers:headers});
  }

  returnCycle(id : number): Observable<Cycle[]>{
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token') 
    });
    return this._http.get<Cycle[]>(`http://localhost:8080/cycle/return/${id}`,{headers:headers});
  }

  restockCycle(id : number, count : number): Observable<Cycle[]>{
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token') 
    });
    return this._http.post<Cycle[]>(`http://localhost:8080/cycle/restock/${id}`, {qty: count}, 
    {responseType: 'json'});
  }

  addCycle(name: string, stock: number,price: number): Observable<Cycle[]>{
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token') 
    });
    return this._http.post<Cycle[]>(`http://localhost:8080/cycle/add`,{name: name, stock: stock, price:price},{responseType:'json'});
  }

}
