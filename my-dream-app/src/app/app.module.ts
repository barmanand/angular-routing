import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormatterRoutingModule } from './formatter/formatter-routing.module';
import { AppRoutingModule } from './/app-routing.module';
import { FormatterModule } from './formatter/formatter.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormatterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
