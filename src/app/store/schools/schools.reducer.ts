import { createReducer, on } from '@ngrx/store';
import { SchoolsApiActions, SchoolsActions } from './schools.actions';
import { SchoolInterface } from '../../models/schools.model';

export const initialState: ReadonlyArray<SchoolInterface> = [];


export const schoolsReducer = createReducer(
    initialState,
    on(SchoolsApiActions.retrievedSchoolList, (_state, { schools }) => schools),
    on(SchoolsActions.addSchool, (_state, { school }) => [..._state, school]),
    on(SchoolsActions.updateSchool, (_state, { school }) => (_state.map(s => s.id === school.id ? { ...s, ...school } : s)))
  );  


