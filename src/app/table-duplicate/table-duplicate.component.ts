import { Component, OnInit } from '@angular/core';
import { DataBringService } from '../data-bring.service';

@Component({
  selector: 'app-table-duplicate',
  templateUrl: './table-duplicate.component.html',
  styleUrls: ['./table-duplicate.component.scss']
})
export class TableDuplicateComponent implements OnInit {
  Tdata: any = {};
  constructor(public service: DataBringService) {
    this.service.getDataforDuplicate().subscribe((data) => {
      this.Tdata = data;
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

}
