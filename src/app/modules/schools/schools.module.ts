import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Route[] = [
  {
    path: '',
    component: SchoolsComponent
  }
];

@NgModule({
  declarations: [
    SchoolsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class SchoolsModule { }
