import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService
{
  /*
   * Construtor realiza injeção de dependência do módulo HttpClient
   * Obs.: Deve ser feito o import do HttpClientModule no app.module.ts
   */
  constructor(private httpClient: HttpClient) { }

  list()
  {
    return [
      { _id: 1, name: 'Angular', category: 'front-end' },
      { _id: 2, name: 'React', category: 'front-end' }
    ];
  }
}
