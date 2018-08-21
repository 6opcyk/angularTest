import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  
  repos = [];
  repo = {};

  constructor(private route: ActivatedRoute, private http: Http, private modalService: NgbModal) { }

  ngOnInit() {
  	 this.http
    .get(`https://api.github.com/users/${this.route.snapshot.params['login']}/repos`)
    .subscribe((response: Response) => {
  		this.repos = response.json();
      console.log(this.repos);
  	});
  }

  openModal(modal, repo){
    this.repo = repo;
    this.modalService.open(modal);
  }
}
