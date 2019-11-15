import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, Routes, RouterModule } from '@angular/router';
import { PersonalDetailFormComponent } from './personal-detail-form/personal-detail-form.component';
import { ResultdetailsComponent } from './resultsdetails/resultdetails.component';
import { SportDetailsFormComponent } from './sport-details-form/sport-details-form.component';
import { SundaySchoolFormComponent } from './sunday-school-form/sunday-school-form.component';



const routes: Routes = [
{ path: 'personal-detail-form',component: PersonalDetailFormComponent },
{ path: 'resultsdetails', component: ResultdetailsComponent},
{ path: 'sport-details-form', component: SportDetailsFormComponent },
{ path: 'sunday-school-form', component: SundaySchoolFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailFormComponent,
    ResultdetailsComponent,
    SportDetailsFormComponent,
    SundaySchoolFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
