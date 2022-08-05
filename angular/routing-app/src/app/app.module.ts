import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoremComponent } from './lorem/lorem.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Route, RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';

const routes : Route[] = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'home', component: HomeComponent },
  {path:'lorem', component: LoremComponent },
  {path:'about', component: AboutComponent },
  {path:'companies', component: CompaniesComponent },
  {path:'company/:id', component: CompanyDetailsComponent},
  {path:'contact', component: ContactUsComponent},
  {path:'**', component: PagenotfoundComponent }
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoremComponent,
    PagenotfoundComponent,
    CompaniesComponent,
    CompanyDetailsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
