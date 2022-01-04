import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  public subjectList$ = new Subject<any[]>();

  constructor(private http: HttpClient)
  {

  }

  /*getListProduct() : any{
    //environment.db_product_url
    return this.http.get<any>(`${environment.}`);
  }*/

  getListProductSubject() : void{
    //environment.db_product_url

    this.http.get<any[]>(`${environment.baseUrlApi}/list_products`).subscribe(data => {
      this.subjectList$.next(data);
    });
  }
}
