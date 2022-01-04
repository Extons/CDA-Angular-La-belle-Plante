import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-card-plant',
  templateUrl: './card-plant.component.html',
  styleUrls: ['./card-plant.component.scss']
})
export class CardPlantComponent implements OnInit {

  @Input() public productCard_List : any[];
  constructor() {
    this.productCard_List = [];
  }

  ngOnInit(): void {
    console.log(this.productCard_List);
  }

}
