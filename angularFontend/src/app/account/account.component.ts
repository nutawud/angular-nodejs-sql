import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { ServiceProvider } from '../ServiceProvider';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  private account_number:string;
  private branch_name:string;
  private balance:string;
  private newaccount_number:string;
  private newbranch_name:string;
  private newbalance:string;

  listaccount:any = [];
  
  constructor(private http:Http,private accountServive : ServiceProvider,private router : Router) { 
	this.getAccount();
  }

  ngOnInit() {
    
    
  }
  getAccount() {
    this.accountServive.GetAccount().subscribe(results => {
      console.log(results);
      this.listaccount = results
    });
    
  }

  addAccount(account_number,branch_name,balance) {
    console.log(account_number,branch_name,balance)
    var data = {
      account_number: this.account_number,
      branch_name: this.branch_name,
      balance: this.balance
    };
    this.accountServive.AddAccount(data)
    .subscribe(res => {
      this.account_number = "";
      this.branch_name = "";
      this.balance = "";
      console.log(res);
    });
    location.reload();
  }

  updateAccount(newbranch_name,newbalance) {
    console.log(newbranch_name,newbalance)
    
    var data = {
      account_number: this.newaccount_number,
      branch_name: this.newbranch_name,
      balance: this.newbalance
    };
    this.accountServive.UpdateAccount(data)
      .subscribe(res => {
        this.newaccount_number = "";
        this.newbranch_name = "";
        this.newbalance = "";
        console.log(res);
      });
    location.reload();
  }

  deleteAccount(account_number,value) {
    console.log(account_number,value)
    var data = {
      account_number: value,
    };
    this.accountServive.DeleteAccount(data)
      .subscribe(res => {
        this.account_number = "";
        console.log(res);
      });
    location.reload();
  }

  getdataValue(account_number,branch_name,balance){
    this.newaccount_number = account_number;
    this.newbranch_name = branch_name;
    this.newbalance = balance;
    console.log(account_number)
  }

}