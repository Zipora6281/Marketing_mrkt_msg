import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from './table/table.component';
import {TableDetailsComponent } from './table-details/table-details.component';

const routes: Routes = [
  {component:TableComponent, path:"table"},
{component:TableDetailsComponent , path:"tabledetails"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
