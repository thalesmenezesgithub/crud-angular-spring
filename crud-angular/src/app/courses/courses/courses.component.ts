import { catchError, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent
{

  //Adiciona o $ para dizer que e observable angular
  courses$: Observable<Course[]>;

  readonly displayedColumns = ['name', 'category','actions'];

  constructor(
    private courseService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  )
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
    console.log("onAdd");
    this.router.navigate(['new'],{ relativeTo: this.route });
  }

  onEdit()
  {
    console.log("onEdit");
    //this.edit.emit(course);
  }

  onDelete()
  {
    console.log("onDelete");
    //this.remove.emit(course);
  }
}
