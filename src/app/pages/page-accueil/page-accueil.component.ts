import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { uniq } from 'underscore';
import { list_products } from '../../data';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  public categorieList : string[];

  constructor() {
    this.categorieList = _.uniq(list_products.map(x => x.product_breadcrumb_label));
  }

  ngOnInit(): void {

  }
}
