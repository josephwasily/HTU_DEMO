import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { CompanyGuard } from './company.guard';
import { UserGuard } from './user.guard';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { CompanyLayoutComponent } from './company-layout/company-layout.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { NotloggedGuard } from './notlogged.guard';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';

const routes: Routes = [
{path:'', component: LandingPageComponent, pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent, canActivate:[NotloggedGuard]},
{path:'not-authorized', component:NotAuthorizedComponent},

{path:'home', component:HomeComponent, canActivate: [AuthGuard]},
{path:'profile', component:ProfileDetailsComponent, canActivate: [AuthGuard]},
{path:'user', component: UserLayoutComponent, canActivate: [UserGuard],
children: [
  {path: '', component: HomeComponent} ]
},
{path:'company', component:CompanyLayoutComponent, canActivate: [CompanyGuard],
 children: [
  {path: '', component: CompanyHomeComponent} ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
