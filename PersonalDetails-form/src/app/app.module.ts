import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailFormComponent } from './personal-detail-form/personal-detail-form.component';
import { ResultdetailsComponent } from './resultdetails/resultdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailFormComponent,
    ResultdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
