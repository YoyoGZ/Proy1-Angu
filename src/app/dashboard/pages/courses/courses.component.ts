import { Component, OnInit } from '@angular/core';
import { Course } from './models';
import { CourseService } from './course.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { CourseFormDialogComponent } from './components/course-form-dialog/course-form-dialog.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styles: [ ]
})
export class CoursesComponent {
  public courses:Observable<Course[]>;

  constructor(
    private matDialog: MatDialog,
    private courseService: CourseService,
    private notifier: NotifierService
  ) {
    this.courseService.loadCourses();
    this.courses = this.courseService.getCourses();
  }


OnCreateCourse(): void {
   this.matDialog
   .open(CourseFormDialogComponent)
   .afterClosed()
   .subscribe({
    next: (v) => { 
        if(v) {
          this.notifier.showSuccess(' Se ha generado el nuevo Curso')
          this.courseService.createCourse({
            name: v.name,
            description: v.description,
            iniDate: v.iniDate,
            finalDate: v.finalDate
          })   
        }
      }
    })
}
 
  onDeleteCourse(courseToDelete: Course): void {
     if (confirm(`¿Está seguro de eliminar el Curso ${courseToDelete.name}?`)) {
     this.courseService.deleteCourseById(courseToDelete.id);
     this.notifier.showSuccess('El Curso fue Borrado')     
    }
  }

  onEditCourse(courseToEdit: Course): void {
    this.matDialog
      .open(CourseFormDialogComponent , { data: courseToEdit })
      .afterClosed()
      .subscribe({
        next: (courseUpdated) => {
          if (courseUpdated) {
            this.courseService.updateCourseById(courseToEdit.id, courseUpdated);
            this.notifier.showSuccess('Curso Editado')
          }
        },
      });    
  }
}
