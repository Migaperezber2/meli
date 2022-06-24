import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../../services/api.service";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  search: string="";
  results:any[]=[];
  constructor(private route: ActivatedRoute,
    private apiService:ApiService,
    private elRef:ElementRef
    ) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {  
      //observable que nos ayuda a obtener los parametros de la url, en este caso, la busqueda realizada         
      this.search = params.search;      
      this.getItems(this.search);
    }
  );
  }
  getItems(search:String){
    //funcion que por medio del api service envia el parametro de busqueda y obtiene los resultados
    this.elRef.nativeElement.querySelector('#searchvalue').value=search;
    this.apiService.search(search)
    .then((r:any)=>{
    
     if(r["results"]){
      this.results=r["results"];
      if(this.results.length>4){
        //obtenemos unicamente los 4 primeros resultados
        this.results=this.results.slice(0,4)
      
      }
     }
     
    })
  }

}
