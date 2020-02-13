import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });
 	
 	constructor(private http: Http) { }

    getBrands() {
        return this.http.get('/brand').pipe(map(res => res.json()));
    }

    getCCTVs() {
        return this.http.get('/cctv').pipe(map(res => res.json()));
    }

}
