import { FormComponent } from './form/form.component';
import { CatspreviewComponent } from './catspreview/catspreview.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: FormComponent},
  {path: 'preview', component: CatspreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
