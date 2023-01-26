import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-from',
  templateUrl: './course-from.component.html',
  styleUrls: ['./course-from.component.scss']
})
export class CourseFromComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder)
  {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  onSubmit(){}

  onCancel(){}
}
