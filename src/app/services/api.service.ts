import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  public search(search:String){
    //obtiene los resultados de la busqueda
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=:"+search).toPromise()
  }
  public item(id:String){
    //obtiene los detalles de un item, enviando un id
    return this.http.get("https://api.mercadolibre.com/items/"+id).toPromise()
  }
  public itemDescription(id:String){
    //obtiene la descripcion de un item, enviando un id
    return this.http.get("https://api.mercadolibre.com/items/"+id+"/description").toPromise()
  }
}
