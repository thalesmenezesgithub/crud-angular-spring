import { Observable } from 'rxjs';
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
  courses: Observable<Course[]>;

  readonly displayedColumns = ['name', 'category'];

  constructor(private courseService: CoursesService)
  {
    this.courses = this.courseService.list();
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
