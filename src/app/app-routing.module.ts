import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);
const redirectUnauthorizedToSignUp = () => redirectUnauthorizedTo(['signin']);

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'signin',
    component: SigninComponent,
    ...canActivate(redirectLoggedInToHome),
  },
  { path: 'signup', component: SignupComponent },
  {
    path: 'user/:userName',
    component: UserDetailComponent,
    ...canActivate(redirectUnauthorizedToSignUp),
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectUnauthorizedToSignUp),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
