import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user';

@Component({
  selector: 'about-page',
  styles: [`
    .profile-card {
      background: #f3f3f3;
      border-radius: 3px;
      padding: 2em;
      text-align: center;
    }
    .profile-card img {
      margin: 1em auto;
      max-width: 50%;
    }
  `],
  template: `
    <div class="row">
      <div class="col-sm-4" *ngFor="let user of users">
        <div class="profile-card">
          <img [src]="user.avatar" class="img-responsive img-circle"  [routerLink]="['/about', user.username]">

          <h2>{{ user.name }}</h2>
          <p><a href="https://twitter.com/{{ user.username }}">{{ user.username }}</a></p>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent implements OnInit {
  users: User[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.data.forEach((data: { users: User[] }) => this.users = data.users);
  }
}