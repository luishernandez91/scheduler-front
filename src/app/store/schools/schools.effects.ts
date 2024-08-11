import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { SchoolsService } from '../../services/schools.service';

@Injectable()
export class SchoolsEffects {

  loadSchools$ = createEffect(() => this.actions$.pipe(
    ofType('[Schools API] Load Schools'),
    exhaustMap(() => this.schoolService.getAll()
      .pipe(
        map(schools => ({ type: '[Schools API] Retrieved School List', schools })),
        catchError(() => EMPTY)
      ))
    )
  );

  createSchool$ = createEffect(() => this.actions$.pipe(
    ofType('[Schools API] Create School'),
    exhaustMap(({school}) => this.schoolService.create(school)
      .pipe(
        map(school => ({ type: '[Schools] Add School', school })),
        catchError(() => EMPTY)
      ))
    )
  );

  editSchool$ = createEffect(() => this.actions$.pipe(
    ofType('[Schools API] Update School'),
    exhaustMap(({schoolId, schoolData}) => this.schoolService.update(schoolId, schoolData)
      .pipe(
        map(school => ({ type: '[Schools] Update School', school })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private schoolService: SchoolsService
  ) {
    this.actions$.subscribe(actions => console.log(actions));
  }
}