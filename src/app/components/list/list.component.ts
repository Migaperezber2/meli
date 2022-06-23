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
  results:Object[]=[];
  constructor(private route: ActivatedRoute,
    private apiService:ApiService,
    private elRef:ElementRef
    ) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      //console.log(params); // { orderby: "price" }
      this.search = params.search;
      //console.log(this.search); // price
      this.getItems(this.search);
    }
  );
  }
  getItems(search:String){
    this.elRef.nativeElement.querySelector('#searchvalue').value=search;
    this.apiService.search(search)
    .then((r:any)=>{
      console.log(r)
     if(r["results"]){
      this.results=r["results"];
      if(this.results.length>4){
        this.results=this.results.slice(0,4)
        //console.log(this.results);
      }
     }
     
    })
  }

}
