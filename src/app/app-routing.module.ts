import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import {LoginComponent} from './auth/login/login.component'
import {RegisterComponent} from './auth/register/register.component'
import { ForgotComponent } from './auth/forgot/forgot.component';

const routes: Routes = [
  {
    path: 'login',
  component: LoginComponent
  },
  {
    path: 'register',
  component: RegisterComponent
  },
  {
    path:'forgot',
    component:ForgotComponent
  },
  {
    path:"",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: 'admin',
    loadChildren:()=>import('./admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: 'public',
    loadChildren:()=>import('./public/public.module').then(mod => mod.PublicModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
