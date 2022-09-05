import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent implements OnInit {

  //Table data
  displayedColumns: string[] = ["plate", "time", "type", "import"]
  items: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
