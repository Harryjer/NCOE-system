import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailFormComponent } from './personal-detail-form/personal-detail-form.component';
import { ResultdetailsComponent } from './resultdetails/resultdetails.component';
import { Route, Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: 'personal-detail-form',component: PersonalDetailFormComponent },
{ path: 'resultdetails', component: ResultdetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailFormComponent,
    ResultdetailsComponent
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
