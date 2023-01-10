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
  courses: Course[] = this.courseService.list();

  readonly displayedColumns = ['name', 'category'];

  constructor(
    private courseService: CoursesService
  ){ }

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
