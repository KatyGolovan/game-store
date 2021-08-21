import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {FriendsComponent} from './friends/friends.component';
import {GamesComponent} from './games/games.component';
import {LibraryComponent} from './library/library.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {
    component:LoginComponent,
    path: ''
  },
  {
    component:FriendsComponent,
    path: 'friends'
  },
  {
    component:GamesComponent,
    path: 'games'
  },
  {
    component:LibraryComponent,
    path: 'library'
  },
  {
    component:ProfileComponent,
    path: 'profile'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
