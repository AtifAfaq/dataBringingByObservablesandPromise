import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { HttpTableComponent } from './http-table/http-table.component'
import { PromiseTableComponent } from './promise-table/promise-table.component';
import {TableDuplicateComponent} from './table-duplicate/table-duplicate.component';
import { MockApiCompComponent } from './mock-api-comp/mock-api-comp.component';
import {JsonDataShowComponent} from './json-data-show/json-data-show.component';
import {JsonDataServerSideSortingComponent} from './json-data-server-side-sorting/json-data-server-side-sorting.component';


const routes: Routes = [
  { path: 'static', component: TableComponent },
  { path: 'http', component: HttpTableComponent },
  { path: 'promise', component: PromiseTableComponent },
  { path: 'httpDuplicate', component: TableDuplicateComponent },
  { path: 'apiMock', component: MockApiCompComponent },
  { path: 'jsonData', component: JsonDataShowComponent },
  { path: 'jsonDataServer', component: JsonDataServerSideSortingComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
