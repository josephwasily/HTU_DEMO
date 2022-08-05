import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { UsersComponent } from './admin/users/users.component';
import { RequestsComponent } from './admin/requests/requests.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
import { ContactComponent } from './user/contact/contact.component';
import { UsercompaniesComponent } from './user/usercompanies/usercompanies.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UsersComponent,
    RequestsComponent,
    UserLayoutComponent,
    ContactComponent,
    UsercompaniesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
