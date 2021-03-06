import { Component, OnInit } from '@angular/core';
import { Request } from '../request.model';
import { Router } from '@angular/router';
import { RequestService } from '../request.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [RequestService]
})

export class WelcomeComponent implements OnInit {
  requests: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private requestService: RequestService) { }

  ngOnInit() {
    this.requests = this.requestService.getRequests();
    console.log("yo" + this.router.url);
  }

  goToDetailPage(clickedRequest: Request) {
    console.log("Oh hi");
    console.log(clickedRequest.$key);
    this.router.navigate(['requests', clickedRequest.$key]);
  }

}
