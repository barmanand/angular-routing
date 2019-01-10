import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { FormatterModule } from './formatter/formatter.module';

const routes: Routes = [
  { path: 'formatter', loadChildren: './formatter/formatter.module#FormatterModule' },
  { path: '', redirectTo: '/formatter', pathMatch: 'prefix' },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
