import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './home/posts/posts.component';
import { UsersComponent } from './home/users/users.component';

export const routes: Routes = [
  {
    path: "home", component: HomeComponent, canActivate: [authGuard],
    children: [
      { path: "posts", component: PostsComponent },
      { path: "users", component: UsersComponent }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
