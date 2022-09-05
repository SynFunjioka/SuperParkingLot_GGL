import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.sass']
})
export class CostsComponent implements OnInit {

  //Table data
  displayedColumns: string[] = ["type", "price", "actions"]
  items: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
