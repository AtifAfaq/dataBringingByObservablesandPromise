import { Component, OnInit } from '@angular/core';
import {DataBringService} from '../data-bring.service';
 
@Component({
  selector: 'app-json-data-server-side-sorting',
  templateUrl: './json-data-server-side-sorting.component.html',
  styleUrls: ['./json-data-server-side-sorting.component.scss']
})
export class JsonDataServerSideSortingComponent implements OnInit {
  serveSideDataSorting;
  constructor(public service:DataBringService) { 
    this.service.getDataServerSideSorting().subscribe((data)=> {
      this.serveSideDataSorting=data

    })

    this.service.getDataServerSideSortingOfEmployees().subscribe((data)=>{
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
