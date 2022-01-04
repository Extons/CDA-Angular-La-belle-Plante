import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as _ from 'underscore';
import { uniq } from 'underscore';
import { CategoriesService } from '../services/filter/categories.service';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  public brutProductList !: any[];
  public productCardList !: string[];
  public categorieList !: string[];
  private subscritpion!: Subscription;

  constructor(private categoriesService : CategoriesService) {
    //this.categorieList = _.uniq(list_products.map(x => x.product_breadcrumb_label));
    //this.categorieList = this.getCategoriesList();
    this.getBrutProductList();
  }

  ngOnInit(): void {

  }

  getBrutProductList() : void{
    this.subscritpion = this.categoriesService.subjectList$.subscribe((item : any) =>{
      console.log("Get All Brut DATA");
      this.brutProductList = item;

      this.getCategoriesList();
      this.getProductCardList();
    });
    this.categoriesService.getListProductSubject();
  }
  getCategoriesList() : void {
      this.categorieList = _.uniq(this.brutProductList.map((x : any) => x.product_breadcrumb_label));
  }

  getProductCardList() : void {
    let tempTab = [...this.brutProductList];
    tempTab.length = 40;
    this.productCardList = tempTab;
  }


  ngOnDestroy(): void{
    this.subscritpion.unsubscribe();
  }
}
