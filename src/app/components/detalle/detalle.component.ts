import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../../services/api.service";
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
id:any;
details;
description;
  constructor(private route: ActivatedRoute,
    private apiService:ApiService
    ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id");
    this.getDetails();
  }

getDetails(){
  this.apiService.item(this.id)
  .then((r)=>{
  //console.log(r)
    this.details=r;
    this.details.price=this.details.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    this.getDescription();
  })
}
getDescription(){
  this.apiService.itemDescription(this.id)
  .then((r)=>{
   // console.log(r)
    this.description=r;
  })
}

}
