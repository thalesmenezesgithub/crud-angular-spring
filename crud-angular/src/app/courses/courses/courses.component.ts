import { catchError, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';


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

  constructor(
    private courseService: CoursesService,
    public dialog: MatDialog)
  {
    this.courses$ = this.courseService.list().pipe( catchError(error => {
      this.onError('Erro ao carregar cursos.');
      return []
    }));
  }

  onError(errorMsg: string)
  {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
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
