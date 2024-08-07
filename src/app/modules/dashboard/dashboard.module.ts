import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'escuelas',
        loadChildren: () => import('../schools/schools.module').then(m => m.SchoolsModule)
      },
      {
        path: 'profesores',
        loadChildren: () => import('../teachers/teachers.module').then(m => m.TeachersModule)
      },
      {
        path: 'materias',
        loadChildren: () => import('../subjects/subjects.module').then(m => m.SubjectsModule)
      },
      {
        path: 'horarios',
        loadChildren: () => import('../schedules/schedules.module').then(m => m.SchedulesModule),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'escuelas'
      }
    ]
  }
];


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DashboardModule { }
