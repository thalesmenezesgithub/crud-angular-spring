import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService
{

  private readonly API = 'api/courses';

  /*
   * Construtor realiza injeção de dependência do módulo HttpClient
   * Obs.: Deve ser feito o import do HttpClientModule no app.module.ts
   */
  constructor(private httpClient: HttpClient) { }

  list()
  {
    return this.httpClient.get<Course[]>(this.API).pipe(delay(1000));
  }

  save(record: Course)
  {
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }
}
