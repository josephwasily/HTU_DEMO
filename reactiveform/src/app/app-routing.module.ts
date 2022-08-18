import { ProfilesListComponent } from './profiles-list/profiles-list.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'', redirectTo:'profile', pathMatch: 'full'},
{path:'profile', children: [
  {path:'', component: ProfilesListComponent, pathMatch: 'full'},
  {path:'edit/:id', component: ProfileDetailsComponent},
  {path:'create', component: ProfileDetailsComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
