/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav>
      <a [routerLink]=" ['./home'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Home
      </a>
      <a [routerLink]=" ['./products'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Products
      </a>
      <a [routerLink]=" ['./users'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Users
      </a>
      <a [routerLink]=" ['./things'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Things
      </a>
      <a [routerLink]=" ['./about'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        About
      </a>
      <!-- <a [routerLink]=" ['./logout'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}" style="float: right">
        Logout
      </a> -->
      <a (click)="logout()">Logout</a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <!-- <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

    <footer>
      <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="25%">
        </a>
      </div>
    </footer> -->
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

  public logout() {
    localStorage.removeItem('X-Auth-Token');
    this.router.navigate(['home']);
  }
}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
