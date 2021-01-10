import { Component, OnInit } from '@angular/core';
import { DataBringService } from '../data-bring.service';

@Component({
  selector: 'app-http-table',
  templateUrl: './http-table.component.html',
  styleUrls: ['./http-table.component.scss']
})
export class HttpTableComponent implements OnInit {
  DatabyHttp;
  constructor(public service: DataBringService) {
    this.service.getDataByHttp().subscribe((data) => {
      this.DatabyHttp = data
    });

    // setTimeout(() => {
    //   console.log(this.DatabyHttp)
    // }, 5000);
   

  }

  ngOnInit(): void {
  }

}
