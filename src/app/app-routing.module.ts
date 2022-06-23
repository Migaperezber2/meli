import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ItemComponent } from './components/item/item.component';
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'items', component: ListComponent },
  { path: 'items/:id', component: DetalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
