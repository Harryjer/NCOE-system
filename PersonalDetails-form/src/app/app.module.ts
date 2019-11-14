import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailFormComponent } from './personal-detail-form/personal-detail-form.component';
import { ResultdetailsComponent } from './resultsdetails/resultdetails.component';
import { SportDetailsFormComponent } from './sport-details-form/sport-details-form.component';
import { Route, Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: 'personal-detail-form',component: PersonalDetailFormComponent },
{ path: 'advance_level-form', component: ResultdetailsComponent},
{ path: 'sport-details-form', component: SportDetailsFormComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailFormComponent,
    ResultdetailsComponent,
    SportDetailsFormComponent
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
