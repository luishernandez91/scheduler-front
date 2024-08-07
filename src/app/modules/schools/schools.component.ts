import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.scss',
})
export class SchoolsComponent {
  public creatingSchool?: boolean;
  public editingSchool?: boolean;
  public showSchoolForm!: boolean;
  public schoolForm!: FormGroup;

  constructor() {
      this.schoolForm = new FormGroup(
        {
          name: new FormControl('', Validators.required),
          fulltime: new FormControl(false)
        }
      );
  }

  editSchool(schoolData: any) {
    this.editingSchool = true;
    this.showSchoolForm = true;

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
}
