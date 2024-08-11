import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectSchools } from '../../store/schools/schools.selectors';
import { SchoolsApiActions } from '../../store/schools/schools.actions';
import { SchoolInterface } from '../../models/schools.model';
import { Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.scss',
})
export class SchoolsComponent implements OnInit {
  public creatingSchool?: boolean;
  public editingSchool?: boolean;
  public showSchoolForm!: boolean;
  public schoolForm!: FormGroup;
  schools$ = this.store.select(selectSchools);
  updatedSchool$!: Observable<SchoolInterface>;

  constructor(private store: Store, private actions$: Actions) {
    this.schoolForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', Validators.required),
      fulltime: new FormControl(false),
    });
    this.apiResponses();
  }

  ngOnInit(): void {
    this.store.dispatch(SchoolsApiActions.loadSchools());
  }

  apiResponses() {
    this.actions$.pipe(
      ofType('[Schools] Update School', '[Schools] Add School')
    ).subscribe(({school}: any) => {
      console.log(`School ${school.name} was updated`);
      this.schoolForm.reset();
      this.showSchoolForm = false;
      this.editingSchool = false;
      this.creatingSchool = false;
    });
  }

  editSchool(schoolData: SchoolInterface) {
    this.editingSchool = true;
    this.showSchoolForm = true;
    this.schoolForm.patchValue(schoolData);
  }

  createSchool() {
    this.creatingSchool = true;
    this.showSchoolForm = true;
  }

  cancelForm() {
    this.showSchoolForm = false;
    this.editingSchool = false;
    this.creatingSchool = false;
    this.schoolForm.reset();
  }

  saveSchool() {

    const { id, ...schoolData } = this.schoolForm.value;
    if (this.creatingSchool) {
      this.store.dispatch(
        SchoolsApiActions.createSchool({school: schoolData})
      );
    } else {
      this.store.dispatch(
        SchoolsApiActions.updateSchool({ schoolId: id, schoolData: schoolData })
      );
    }
  }
}
