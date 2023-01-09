import { Component } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent
{
  courses: Course[] = [
    { _id: 1, name: 'Angular', category: 'front-end' }
  ];
  readonly displayedColumns = ['name', 'category'];

  constructor(){ }

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
