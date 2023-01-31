import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { CourseFromComponent } from './course-from/course-from.component';
import { ReactiveFormsModule } from '@angular/forms';

//Shared pasta compartilhada de componentes
import { SharedModule } from '../shared/shared.module';

//Imports Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CoursesListComponent } from './courses-list/courses-list.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseFromComponent,
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
