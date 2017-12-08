import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ServiceProvider {


    constructor(private http : Http) { }
  
    GetAccount() {
      
	  return this.http.get('http://localhost:3000/GetAccount').map((res: Response) => res.json() )
		
	}
  
    AddAccount(data) {
      let headers = new Headers({ "Content-Type": "application/json" });
      let options = new RequestOptions({ headers: headers });
  
      return this.http.post('http://localhost:3000/InsertAccount', JSON.stringify(data), options)
        .map(res => res.json());
    }
  
    UpdateAccount(data) {
      let headers = new Headers({ "Content-Type": "application/json" });
      let options = new RequestOptions({ headers: headers });
  
      return this.http.put('http://localhost:3000/UpdateAccount', JSON.stringify(data), options)
        .map(res => res.json());
    }
  
  
    DeleteAccount(data) {
      let headers = new Headers({ "Content-Type": "application/json" });
      let options = new RequestOptions({ headers: headers });
  
      return this.http.post('http://localhost:3000/DeleteAccount', JSON.stringify(data), options)
        .map(res => res.json());
    }
  
  }
