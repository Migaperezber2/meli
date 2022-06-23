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
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=:"+search).toPromise()
  }
  public item(id:String){
    return this.http.get("https://api.mercadolibre.com/items/:"+id).toPromise()
  }

}
