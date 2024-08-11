import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { SchoolInterface } from '../../models/schools.model';


export const SchoolsActions = createActionGroup({
    source: 'Schools',
    events: {
        'Add School': props<{school: SchoolInterface}>(),
        'Update School': props<{school: SchoolInterface}>(),
    }
});

export const SchoolsApiActions = createActionGroup({
    source: 'Schools API',
    events: {
      'Retrieved School List': props<{ schools: ReadonlyArray<SchoolInterface> }>(),
      'Create School': props<{school: SchoolInterface}>(),
      'Update School': props<{schoolId: number, schoolData: SchoolInterface}>(),
      'Load Schools': emptyProps(),
    },
  });
