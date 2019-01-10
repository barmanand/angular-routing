import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { HtmlFormatterComponent } from './html-formatter/html-formatter.component';
import { FormatterModule } from './formatter.module';
import { FormatterComponent } from './formatter.component';

const routes: Routes = [
  { path: '', component: FormatterComponent },
  { path: 'json-formatter', component: JsonFormatterComponent },
  { path: 'html-formatter', component: HtmlFormatterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormatterRoutingModule { }
