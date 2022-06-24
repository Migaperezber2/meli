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
  //funcion para obtener los detalles de un producto por medio del api service
  this.apiService.item(this.id)
  .then((r)=>{
 
    this.details=r;
    this.details.price=this.details.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    this.getDescription();
  })
}
getDescription(){
    //funcion para obtener la descripcion de un producto por medio del api service
  this.apiService.itemDescription(this.id)
  .then((r)=>{

    this.description=r;
  })
}

}
