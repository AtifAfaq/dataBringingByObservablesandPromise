import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DataBringService } from '../data-bring.service';
import { Employee } from '../dataModels/employee';


@Component({
  selector: 'app-mock-api-comp',
  templateUrl: './mock-api-comp.component.html',
  styleUrls: ['./mock-api-comp.component.scss']
})
export class MockApiCompComponent implements OnInit {
  success;
  searchTxt;
  completeData: Array<Employee> = [];
  apiData: Array<Employee> = [];
  dropdownSalary = [100000, 200000, 300000, 400000];
  dropdownAge = [{
    filterName: 'Complete Record',
    value: 100
  },
  {
    filterName: 'Under age 30',
    value: 30
  },
  {
    filterName: 'Under age 50',
    value: 50
  },
  {
    filterName: 'Above age 50',
    value: 100
  }];
  constructor(public service: DataBringService,
    public router: Router) {
    this.service.getDataFromMockApi().subscribe(
      (dataObj: any) => {
        this.completeData = dataObj.data;
        this.apiData = dataObj.data;
        this.success = dataObj.status;

      },
      (err) => { alert(err.message); })


  }
  filterAge(age) {
    this.apiData = this.completeData.filter((data) => Number(data.employee_age) <= age.value)
  }

  filterSalary(salary) {
    this.apiData = this.completeData.filter((data) => Number(data.employee_salary) <= salary)
  }

  ngOnInit(): void {
  }

}
