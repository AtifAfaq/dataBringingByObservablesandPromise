import { Component, OnInit } from '@angular/core';
import { DataBringService } from '../data-bring.service'

@Component({
  selector: 'app-promise-table',
  templateUrl: './promise-table.component.html',
  styleUrls: ['./promise-table.component.scss']
})
export class PromiseTableComponent implements OnInit {
  Data;
  constructor(public service: DataBringService) {
    this.service.getDatabyPromise().then((data) => {this.Data = data
     });

    //     setTimeout(() => {
    //       console.log(this.Data)
    // }, 5000);
    

  }

  ngOnInit(): void {
  }

}
