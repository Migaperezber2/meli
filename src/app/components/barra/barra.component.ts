import { Component, OnInit,ElementRef,  } from '@angular/core';
import {Router, } from '@angular/router';
@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  constructor(
    private elRef:ElementRef,
   private router: Router
  ) { }

  ngOnInit(): void {
  }

search(){
  var buscado=this.elRef.nativeElement.querySelector('#searchvalue').value;

  //location.href="/items?search="+buscado;
  this.router.navigate(['./items'], {queryParams:{search: buscado}});
}

}
