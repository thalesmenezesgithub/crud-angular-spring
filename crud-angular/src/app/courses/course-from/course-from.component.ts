import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-from',
  templateUrl: './course-from.component.html',
  styleUrls: ['./course-from.component.scss']
})
export class CourseFromComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location,
  )
  {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  onSubmit()
  {
    //Sempre utilizar o método subscribe
    this.service.save(this.form.value)
        .subscribe(result => this.onSucess(), error => {
          this.onError()
        });
  }

  onCancel()
  {
    this.location.back();
  }

  private onSucess()
  {
    this.snackBar.open('Curso salvo com curso.','', { duration: 5000 });
  }

  private onError(): void
  {
    this.snackBar.open('Erro ao salvar curso.','', { duration: 5000 });
  }
}
