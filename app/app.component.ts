import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    .navbar-nav .active {
      color: #fff;
    }
  `],
  templateUrl: './app/app.component.html'
})
export class AppComponent {
  message = 'This is the sample message.';
}