import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { ThingsComponent } from './things';
import { UsersComponent } from './users';
import { ProductsComponent } from './products';
import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',       component: HomeComponent },
  { path: 'home',   component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: 'users',  component: UsersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'things', component: ThingsComponent },
  { path: '**',     component: NoContentComponent },
];
