import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  template: `
    <div class="jumbotron text-center">
      <div *ngIf="user">
        <h1>{{ user.name }}</h1>
        <div class="form-group">
          <input type="text" [(ngModel)]="editName" class="form-control">
        </div>
        <div class="form-group text-center">
          <button (click)="cancel()" class="btn btn-danger">Cancel</button>
          <button (click)="save()" class="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  `
})
export class DashboardUserDetailsComponent implements OnInit {
  user: User;
  editName: string;

  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() { 

    this.route.params.forEach(params => {
      let username = params['username'];
      this.service.getUser(username).then(user => {
        this.user = user;
        this.editName = user.name;
      }); 
    });
  }
  save() {
    this.user.name = this.editName;
    this.router.navigate(['/dashboard/users']);
  }
  // Don't save and navigate back to users page
  cancel() {
    this.router.navigate(['/dashboard/users']);
  }

  canDeactivate() {
    console.log('Trying to navigate away');

    //  If editName !== this.user.name
    if( this.user.name !== this.editName) {
      return window.confirm('Discard changes?');
    } 
    return true;
  }

}