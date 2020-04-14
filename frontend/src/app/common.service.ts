import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  uri = 'http://localhost:8080/api';

 	constructor(private http: HttpClient) {}

  getBrands() {
    return this.http.get(`${this.uri}/data/brand`);
  }

  getCCTVs() {
    return this.http.get(`${this.uri}/data/cctv`);
  }

  addCCTVs(cctvs) {
    console.log('common.service', cctvs);
    return this.http.post(`${this.uri}/data/addcctvs`, cctvs);
    // return this.http.post(`${this.uri}/addcctvs`, JSON.stringify(cctvs), this.options);
  }
}
