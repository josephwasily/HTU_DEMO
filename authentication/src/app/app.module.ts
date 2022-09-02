import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { HotToastModule } from '@ngneat/hot-toast';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { CompanyLayoutComponent } from './company-layout/company-layout.component';
import {MatRadioModule} from '@angular/material/radio';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ActivitiesListComponent } from './activities-list/activities-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    HomeComponent,
    ProfileDetailsComponent,
    UserLayoutComponent,
    CompanyHomeComponent,
    CompanyLayoutComponent,
    NotAuthorizedComponent,
    CreateActivityComponent,
    ActivitiesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    HotToastModule.forRoot(),
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
