import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

const routes: Routes = [
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path:'sign-up',
    component: SignUpComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user-profile'
  },
  {
    path:'movies',
    component: SearchMovieComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
