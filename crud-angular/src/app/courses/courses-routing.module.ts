import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseFromComponent } from './containers/course-from/course-from.component';
import { CoursesComponent } from './containers/courses/courses.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'new', component: CourseFromComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
