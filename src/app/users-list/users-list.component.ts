import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable"

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  title = 'angularTest';
  users = [];
  errorMessage = "";
  searchFieldIsValid = true;

  constructor (private http: Http) {}

  ngOnInit(){
  	this.http.get("https://api.github.com/users")
    .subscribe((response: Response) => {
  		this.users = response.json();
  	});
  }

  onKeyUp(event){
    if (event.target.value){
      this.http
      .get(`https://api.github.com/search/users?q=${event.target.value}`)
      .catch((error: Response) => {
        this.errorMessage = JSON.parse(error.text()).message;
        this.searchFieldIsValid = false;
        console.log(error);
        return Observable.throw(error.status);
      })
      .subscribe((response: Response) => {
        this.users = response.json()["items"];
        this.errorMessage = "";
        this.searchFieldIsValid = true;
      });
    }
  } 
}
