import { Component, OnInit } from '@angular/core';
import { DataBringService } from '../data-bring.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  Data;
  constructor(public service: DataBringService) {
    this.Data = this.service.getData();
  }
  ngOnInit(): void {
  }
}