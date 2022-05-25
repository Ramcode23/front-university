import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './login-page/login-page.component';
/* import { LoginPageComponent } from './login-page/login-page.component'; */

const routes: Routes = [
  { path: '', component: AuthComponent },

  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: LoginPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
