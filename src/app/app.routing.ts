import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { FormComponent } from './components/form/form.component';
import { ExamplesModule } from './components/components.module';
import { AdminComponent } from './admin/admin.component';
import { AdminLandingComponent } from './admin/components/admin-landing/admin-landing.component';
import { AdminFormComponent } from './admin/components/admin-form/admin-form.component';

const routes: Routes =[
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'login',           component: LoginComponent },
    { path: 'form',           component: FormComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'gebeya_admin',          component: AdminComponent },
    { path: 'gebeya_admin_home',          component: AdminLandingComponent },
    { path: 'gebeya_admin_form',          component: AdminFormComponent },


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
