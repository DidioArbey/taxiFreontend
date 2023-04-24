import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

//peticiones del backen con core angular
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {catchError, map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //restAPI
  private REST_API: string = 'http://localhost:8000/api/products'
  httpHeaders = new HttpHeaders().set('Content-type','application/json')



  constructor(private httpClient:HttpClient) { }
  // Metodos
  getProducts(): Observable<any>{
    return this.httpClient.get(this.REST_API,{headers: this.httpHeaders})
  }

  getProduct(id:any): Observable<any>{
    return this.httpClient.get(`${this.REST_API}/${id}`,{headers: this.httpHeaders}).pipe(
      map((res:any)=>{
        return res || {}
      })
    )
  }

  createProduct(data:Product): Observable<any>{
    return this.httpClient.post(this.REST_API, data,{headers: this.httpHeaders}).pipe(catchError(this.handleError))
  }

  updateProduct(id:any, data:any): Observable<any>{
    return this.httpClient.put(`${this.REST_API}/${id}`, data,{headers: this.httpHeaders}).pipe(catchError(this.handleError))
  }

  deletProduct(id:any): Observable<any>{
    return this.httpClient.delete(`${this.REST_API}/${id}`,{headers: this.httpHeaders}).pipe(catchError(this.handleError))
  }

  handleError(error:HttpErrorResponse){
    let errorMsg:string = ''
    if (error.error instanceof ErrorEvent) {
      errorMsg = error.error.message
    }else{
      errorMsg = `Erro de codigo: ${error.status}. Mensaje:${error. message}`
    }
    return throwError( ()=>{
      errorMsg
    })
  }


}
