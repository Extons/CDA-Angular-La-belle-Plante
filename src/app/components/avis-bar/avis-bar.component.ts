import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avis-bar',
  templateUrl: './avis-bar.component.html',
  styleUrls: ['./avis-bar.component.scss']
})
export class AvisBarComponent implements OnInit {

  public starStatus : any[];
  constructor() {
    this.starStatus = new Array(5);
  }

  ngOnInit(): void {
  }

}
