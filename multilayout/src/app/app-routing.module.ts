import { AdminCompaniesComponent } from './admin-companies/admin-companies.component';
import { LoginComponent } from './login/login.component';
import { UsercompaniesComponent } from './user/usercompanies/usercompanies.component';
import { ContactComponent } from './user/contact/contact.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';

import { RequestsComponent } from './admin/requests/requests.component';
import { UsersComponent } from './admin/users/users.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'', redirectTo:'/login', pathMatch:'full' },
  {path:'login', component: LoginComponent},
  {path:'admin', component: AdminLayoutComponent, children: [
    
    {path:'', redirectTo:'/admin/requests', pathMatch:'full'},
    {path:'users', component: UsersComponent},
    {path:'requests', component: RequestsComponent},
    {path:'companies', component: AdminCompaniesComponent}
  ]},
  {path:'user', component: UserLayoutComponent, children: [
    
    {path:'', redirectTo:'/user/companies', pathMatch:'full'},
    {path:'contact', component: ContactComponent},
    {path:'companies', component: UsercompaniesComponent},
  ]},
  {path:'superuser/x',component: UsercompaniesComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
