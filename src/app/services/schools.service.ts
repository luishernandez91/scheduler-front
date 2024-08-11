import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchoolInterface } from '../models/schools.model';

@Injectable({
  providedIn: 'root',
})
export class SchoolsService {

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<SchoolInterface[]> {
    return this.http.get<SchoolInterface[]>('http://localhost:3000/schools');
  }

  create(schoolData: SchoolInterface) {
    return this.http.post('http://localhost:3000/schools', schoolData);
  }

  update(schoolId: number, schoolData: SchoolInterface) {
    return this.http.put(`http://localhost:3000/schools/${schoolId}`, schoolData);
  }
}
