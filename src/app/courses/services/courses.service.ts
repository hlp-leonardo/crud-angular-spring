import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  //private readonly API = 'api/courses';
  private readonly API = '/assets/courses.json';

  constructor(private httpclient: HttpClient) { }

  list() {
    return this.httpclient.get<Course[]>(this.API).pipe(
      first(),
      //delay(1500),
      tap(courses => console.log(courses))
    );
  }
}
