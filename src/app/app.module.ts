import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { SearchByComponent } from './search-by/search-by.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResultsComponent } from './results/results.component';
import { DecisionBarComponent } from './decision-bar/decision-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchByComponent,
    ResultsComponent,
    DecisionBarComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
