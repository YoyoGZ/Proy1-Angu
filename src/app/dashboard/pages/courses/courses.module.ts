import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseFormDialogComponent } from './components/course-form-dialog/course-form-dialog.component';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { CourseService } from './course.service';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormDialogComponent,
    CourseTableComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
  ],
  exports:[
    CoursesComponent
  ],
  providers:[
    {provide: CourseService },
  ]
})
export class CoursesModule { }
