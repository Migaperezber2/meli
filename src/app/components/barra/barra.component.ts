import { Component, OnInit,ElementRef,  } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  constructor(
    private elRef:ElementRef,
  ) { }

  ngOnInit(): void {
  }

search(){
  var buscado=this.elRef.nativeElement.querySelector('#searchvalue').value;
  location.href="/items?search="+buscado;
}

}
