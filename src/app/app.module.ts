import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { AdminComponent } from './admin/admin.component';
import { AdminSigninComponent } from './admin/components/admin-signin/admin-signin.component';
import { AdminLandingComponent } from './admin/components/admin-landing/admin-landing.component';
import { AdminFormComponent } from './admin/components/admin-form/admin-form.component';
import { AdminNavbarComponent } from './admin/shared/admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './admin/shared/admin-footer/admin-footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { FormComponent } from './components/form/form.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,    
    NavbarComponent,
    FooterComponent,
    AdminComponent,
    AdminSigninComponent,
    AdminLandingComponent,
    AdminFormComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    LandingComponent,
    FormComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
