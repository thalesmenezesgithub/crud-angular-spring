import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';

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
import { CourseFromComponent } from './course-from/course-from.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseFromComponent
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
    SharedModule,
  ]
})
export class CoursesModule { }
