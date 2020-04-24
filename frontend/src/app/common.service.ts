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
    // console.log('common.service getBrands');
    return this.http.get(`${this.uri}/data/brand`);
  }

  getCCTVs() {
    // console.log('common.service getCCTVs');
    return this.http.get(`${this.uri}/data/cctv`);
  }

  getAccessory() {
    // console.log('common.service getAccessory');
    return this.http.get(`${this.uri}/data/accessory`);
  }

  getRecorders() {
    // console.log('common.service getRecorders');
    return this.http.get(`${this.uri}/data/recorder`);
  }

  addCCTVs(cctvs) {
    // console.log('common.service addCCTV', cctvs);
    return this.http.post(`${this.uri}/data/addcctvs`, cctvs);
    // return this.http.post(`${this.uri}/addcctvs`, JSON.stringify(cctvs), this.options);
  }

  addRecorders(recoders) {
    // console.log('common.service addRecorders', recoders);
    return this.http.post(`${this.uri}/data/addrecorders`, recoders);
  }

  login(auth) {
    // console.log('common.service login', auth);
    return this.http.post(`${this.uri}/auth/login`, auth);
  }

  register(auth) {
    // console.log('common.service register', auth);
    return this.http.post(`${this.uri}/auth/register`, auth);
  }
}
