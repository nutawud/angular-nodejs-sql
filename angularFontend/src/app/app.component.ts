import { ServiceProvider } from './ServiceProvider';
import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'app';
  



  constructor(private http:Http ,private service: ServiceProvider){


  }
  

}
