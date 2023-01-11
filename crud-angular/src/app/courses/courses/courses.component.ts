import { catchError, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent
{

  //Adiciona o $ para dizer que e observable angular
  courses$: Observable<Course[]>;

  readonly displayedColumns = ['name', 'category'];

  constructor(private courseService: CoursesService)
  {
    this.courses$ = this.courseService.list().pipe( catchError(error => {
      console.log(error);
      return []
    }));
  }

  onAdd()
  {
    //this.add.emit(true);
  }

  onEdit(course: Course)
  {
    //this.edit.emit(course);
  }

  onDelete(course: Course)
  {
    //this.remove.emit(course);
  }
}
