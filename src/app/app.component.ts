import { Component } from '@angular/core';
import { GithubComponent } from './github/github.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [GithubComponent]
})

export class AppComponent {
  title = 'github search!';
}
