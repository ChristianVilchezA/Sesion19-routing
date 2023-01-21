import { Injectable } from '@angular/core';
import { character } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiURI: string = "https://rickandmortyapi.com/api/character"
  private products: character[] = []
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get(this.apiURI)
  }

  getProductById(id: string){
    return this.http.get(`${this.apiURI}/${id}`)
  }
}
