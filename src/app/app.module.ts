import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ItemComponent } from './components/item/item.component';
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { BarraComponent } from './components/barra/barra.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    ItemComponent,
    MainComponent,
    ListComponent,
    BarraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
