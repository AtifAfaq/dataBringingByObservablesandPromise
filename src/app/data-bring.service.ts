import { Injectable } from '@angular/core';
import { Xarray } from './model';
import { HttpClient } from '@angular/common/http';
import { filter, map, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataBringService {

  constructor(public http: HttpClient) { }
  getData() {
    return Xarray;
  }

  getDataByHttp() {
    return this.http.get('//jsonplaceholder.typicode.com/todos')
  }

  getDatabyPromise() {
    return this.http.get('//jsonplaceholder.typicode.com/photos').toPromise()
  }

  getDataforDuplicate() {
    return this.http.get('assets/config.json');

  }

  getDataFromMockApi() {
    return this.http.get('//dummy.restapiexample.com/api/v1/employees')
  }

  getJsonData() {
    return this.http.get('https://reqres.in/api/products/3')
  }


  /////////Map can be used on array or on Object////////

  getDataServerSideSorting() {
    return this.http.get('//jsonplaceholder.typicode.com/todos').pipe(
      map((result: any) =>
        result.filter(one => one.id < 50)
      ))
  }


  getDataServerSideSortingOfEmployees() {
    return this.http.get('//dummy.restapiexample.com/api/v1/employees').pipe(
      map((result: any) =>
        result.data.filter(one => one.id < 10)
      ))
  }
}
