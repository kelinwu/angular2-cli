import { Component } from '@angular/core';
import { GithubComponent } from './github/github.component';
import {GithubService} from './services/github.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [GithubComponent],
  providers:[HTTP_PROVIDERS,GithubService]
})

export class AppComponent {
  title = 'github search!';
}
