import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFanComponent } from './create-fan/create-fan.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FanContainerComponent } from './fan-container/fan-container.component';
import { FanListComponent } from './fan-container/fan-list/fan-list.component';
import { DetailFanComponent } from './fan-container/detail-fan/detail-fan.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [AppComponent, CreateFanComponent, NavComponent, FanContainerComponent, FanListComponent, DetailFanComponent, ErrorMessageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
