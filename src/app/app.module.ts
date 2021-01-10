import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HttpTableComponent } from './http-table/http-table.component';
import { HttpClientModule } from '@angular/common/http';
import { PromiseTableComponent } from './promise-table/promise-table.component';
import { TableDuplicateComponent } from './table-duplicate/table-duplicate.component';
import { MockApiCompComponent } from './mock-api-comp/mock-api-comp.component';
import { JsonDataShowComponent } from './json-data-show/json-data-show.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchPipe } from './search.pipe';
import { JsonDataServerSideSortingComponent } from './json-data-server-side-sorting/json-data-server-side-sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HttpTableComponent,
    PromiseTableComponent,
    TableDuplicateComponent,
    MockApiCompComponent,
    JsonDataShowComponent,
    SearchPipe,
    JsonDataServerSideSortingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
