import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.scss']
})

export class FilterSideBarComponent implements OnInit {

  @Input() categorie_list : string[];
  constructor() {
    this.categorie_list = [];
  }

  ngOnInit(): void {

  }

  public onChangeValue(valueEvent : any) : void{
    console.log(valueEvent);
  }
}
