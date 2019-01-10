import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatterRoutingModule } from './formatter-routing.module';
import { FormatterComponent } from './formatter.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { HtmlFormatterComponent } from './html-formatter/html-formatter.component';

@NgModule({
  imports: [
    CommonModule,
    FormatterRoutingModule
  ],
  declarations: [FormatterComponent, JsonFormatterComponent, HtmlFormatterComponent]
})
export class FormatterModule { }
