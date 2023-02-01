import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent
{
  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category','actions'];

  //private router: Router, private route: ActivatedRoute

  // constructor()
  // {

  // }

  onAdd()
  {
    this.add.emit(true);
    //this.router.navigate(['new'],{ relativeTo: this.route });
  }

  onEdit()
  {
    //this.edit.emit(course);
  }

  onDelete()
  {
    //this.remove.emit(course);
  }
}
