import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductCardService {

  public subjectList$ = new Subject<any[]>();

  constructor(private http: HttpClient) { }

  getProductCard() : void {
    this.http.get<any[]>(`${environment.baseUrlApi}/list_products`).subscribe(data => {
      this.subjectList$.next(data);
    });
  }
}
