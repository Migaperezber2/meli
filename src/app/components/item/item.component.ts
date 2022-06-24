import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() item:any={"thumbnail":"","thumbnail_id":"","price":"","title":"","address":{"state_name":""},"shipping": {"free_shipping": false}}
  constructor() { }

  ngOnInit(): void {
    this.item.price=this.item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

}
