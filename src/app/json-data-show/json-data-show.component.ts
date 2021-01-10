import { Component, OnInit } from '@angular/core';
import { DataBringService } from '../data-bring.service';

@Component({
  selector: 'app-json-data-show',
  templateUrl: './json-data-show.component.html',
  styleUrls: ['./json-data-show.component.scss']
})
export class JsonDataShowComponent implements OnInit {
  jsonData: any = {};
  constructor(public service: DataBringService) {
    this.service.getJsonData().subscribe((data) => {
      this.jsonData = data;
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

}
