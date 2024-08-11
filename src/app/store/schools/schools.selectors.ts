import { createFeatureSelector } from '@ngrx/store';
import { SchoolInterface } from '../../models/schools.model';

export const selectSchools = createFeatureSelector<ReadonlyArray<SchoolInterface>>('schools');
