import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'http://localhost:8080/api/courses';

  constructor(private httpclient: HttpClient) { }

  list() {
    return this.httpclient.get<Course[]>(this.API).pipe(
      first(),
      delay(5000),
      tap(courses => console.log(courses))
    );
  }
}
